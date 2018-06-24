import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Organization } from '../../models/Organization';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { UserRoleService } from '../user-role/user-role.service';
import { User } from '../../models/User';
import { RouteAggregator, RouteAggregatorFactory } from '../../lib/RouteAggregator';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private orgRouteAggregator: RouteAggregator;
  private _eventResourceAggregator: RouteAggregator;

  private _orgEventsSource: BehaviorSubject<Event[]> = new BehaviorSubject([]);
  orgEvents$: Observable<Event[]> = this._orgEventsSource.asObservable();



  constructor(
    private http: HttpClient,
    private userRoleService: UserRoleService) {
    this.orgRouteAggregator = RouteAggregatorFactory
      .createSimpleUrlAggregator('https://volunteero-organizations.herokuapp.com');
    this.orgRouteAggregator
      .registerResource('organizations', 'organizations');

    this._eventResourceAggregator = RouteAggregatorFactory
      .createMethodBasedUrlAggregator('https://volunteero-events.herokuapp.com/');
    this._eventResourceAggregator
      .registerResource('collect', 'events/by', 'post');
  }

  private baseUrl = 'https://volunteero-organizations.herokuapp.com/organizations/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: null
  };

  createOrganization(organization: any): Promise<any> {
    let retrievedUser: User;

    this.userRoleService.user$.subscribe((user: User) => {
      retrievedUser = user;

    });
    const accessToken = retrievedUser.accessToken;

    // Update the request information with user id
    organization.user_id = retrievedUser.id;

    // Add the token in the url query params
    this.httpOptions.params = new HttpParams().set('accessToken', accessToken);

    return new Promise(resolve => {
      this.http.post(this.baseUrl, organization, this.httpOptions).subscribe((result) => {

        console.log('THE RESULT BEFORE REFRESH');
        console.log(result);
        // Refresh the data
        this.userRoleService.refresh();

        resolve(result);

      });
    });


  }

  getOrganizationById(id: string): Observable<Organization> {

    return this.http.get(this.baseUrl + id, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));

  }

  getOrganizationEvents(id: string): Promise<Event[]> {
    const route = this._eventResourceAggregator.getResourceRoute('collect');
    const body = {
      field: 'organization_id',
      value: id
    }
    return new Promise((_res, _rej) => {
      this.http.post(route, { body }).subscribe((events: Event[]) => {
        if (events) {
          console.log('UI: found a user');
          console.log(events);
          if (events.length > 0) {
            this._orgEventsSource.next(events);
            _res(events);
          } else {
            _rej(new Error('events not found'));
          }
        } else {
          _rej(new Error('events not found'));
        }
      });
    }

}

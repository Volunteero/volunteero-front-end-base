import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Event} from '../../models/Event';
import {of} from 'rxjs/internal/observable/of';
import {catchError} from 'rxjs/operators';
import {UserRoleService} from '../user-role/user-role.service';
import {OrganizationService} from '../organization/organization.service';


@Injectable({
  providedIn: 'root'
})

export class EventService {

  private baseUrl = 'https://volunteero-events.herokuapp.com/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: null
  };


  constructor(private http: HttpClient, private userRoleService: UserRoleService, private organizationService: OrganizationService) {
  }

  createEvent(event: any): Observable<any> {

    this.userRoleService.selectedRole$.subscribe((result) => {

      // Retrieve the organization_id
      event.organization_id = result.entityId;

      // Retrieve the access token
      const accessToken = this.userRoleService.activeAccessToken;

      // Add the token in the url query params
      this.httpOptions.params = new HttpParams().set('token', accessToken.toString());

    });

    return this.http.post(this.baseUrl = 'events', event, this.httpOptions)
      .pipe(catchError(err => {
        return of(err);
      }));
  }


  checkEventParticipationStatus(event_id: string, user_id: string) {

    // Add the token in the url query params

    this.httpOptions.params = new HttpParams().set('event_id', event_id).set('user_id', user_id);

    return this.http.get(this.baseUrl + 'participation/arrived', this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));
  }

  participateIntoEvent(event_id: string, user_id: string) {
    this.httpOptions.params = null;

    // Create the object to be sent
    const userEventData = {'event': event_id, 'user': user_id};

    return this.http.post(this.baseUrl + 'participation/enroll ', userEventData, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));
  }

  cancelEventParticipation(event_id: string, user_id: string) {
    this.httpOptions.params = null;
    // Create the object to be sent
    const userEventData = {'event': event_id, 'user': user_id};

    return this.http.post(this.baseUrl + 'participation/leave ', userEventData, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));

  }

  getEventById(id: string): Observable<Event> {

    return this.http.get(this.baseUrl + 'events/' + id, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));

  }

}




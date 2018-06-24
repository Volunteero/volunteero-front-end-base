import { Injectable } from '@angular/core';
import { UserRoleService } from '../user-role/user-role.service';
import { User, USER_STUB } from '../../models/User';
import { RouteAggregator, RouteAggregatorFactory } from '../../lib/RouteAggregator';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Organization } from '../../models/Organization';
import { ERROR_COLLECTOR_TOKEN } from '@angular/platform-browser-dynamic/src/compiler_factory';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private _userResourceAggregator: RouteAggregator;
  private _orgResourceAggregator: RouteAggregator;
  private _eventResourceAggregator: RouteAggregator;

  private userInfoSource: BehaviorSubject<User> = new BehaviorSubject<User>(USER_STUB);
  private userOrganizationSource: BehaviorSubject<Organization[]> = new BehaviorSubject([]);
  private userEventsSource: BehaviorSubject<Event[]> = new BehaviorSubject([]);

  userInfo$: Observable<User> = this.userInfoSource.asObservable();
  userOrganizations$: Observable<Organization[]> = this.userOrganizationSource.asObservable();
  userEvents$: Observable<Event[]> = this.userEventsSource.asObservable();

  // FIXME: this is a very crappy way of sharing data
  constructor(private http: HttpClient) {
    this._userResourceAggregator = RouteAggregatorFactory
      .createMethodBasedUrlAggregator('https://volunteero-altar.herokuapp.com/altar/v1/');
    this._userResourceAggregator
      .registerResource('find', 'users/find', 'put');


    this._orgResourceAggregator = RouteAggregatorFactory
      .createSimpleUrlAggregator('https://volunteero-organizations.herokuapp.com/organizations');
    this._orgResourceAggregator
      .registerResource('collect', 'get-organizations-by-user-id/');


    this._eventResourceAggregator = RouteAggregatorFactory
      .createSimpleUrlAggregator('https://volunteero-events.herokuapp.com/');
    this._eventResourceAggregator
      .registerResource('collect', 'participation/user');
  }

  /**
   * Updates the user source
   * @param user 
   */
  setUserInformation(user: User): void {
    this.userInfoSource.next(user);
  }

  /**
   * Retrieves the information about the 
   * user and returns if the retrieval was successful or not
   * @param username 
   * @return {Promise<Boolean>}
   */
  getUserInformation(username: string): Promise<Boolean> {
    const { route, method } = this._userResourceAggregator.getResourceObject('find');
    // (this.http[method] || this.http.put)()
    return new Promise((_res, _rej) => {
      this.http.put(route, { username }).subscribe((user: User) => {
        if (user) {
          console.log('UI: found a user');
          console.log(user);
          this.userInfoSource.next(user);
          _res(true);
        } else {
          _res(false);
        }
      });
    });
  }

  getUserOrganizationsById(id: string): Promise<Organization[]> {
    const route = this._orgResourceAggregator.getResourceRoute('collect');
    // (this.http[method] || this.http.put)()
    return new Promise((_res, _rej) => {
      this.http.get(`${route}${id}`).subscribe((orgs: Organization[]) => {
        if (orgs) {
          console.log('UI: found a user');
          console.log(orgs);
          this.userOrganizationSource.next(orgs);
          _res(orgs);
        } else {
          _res([]);
        }
      });
    });
  }

  getUserEvents(user: User): Promise<Event[]> {
    const route = this._eventResourceAggregator.getResourceRoute('collect');
    return this._retrieveEvents(route, user.id || user.user_id)
      // try again with the username this time
      .catch((eror) => { return this._retrieveEvents(route, user.username) });
  }

  _retrieveEvents(route: string, userIdentification: string): Promise<Event[]> {
    const params = new HttpParams().set('user', userIdentification);
    return new Promise((_res, _rej) => {
      this.http.get(route, { params }).subscribe((events: Event[]) => {
        if (events) {
          console.log('UI: found a user');
          console.log(events);
          if (events.length > 0) {
            this.userEventsSource.next(events);
            _res(events);
          } else {
            _rej([]);
          }
        } else {
          _rej([]);
        }
      });
    });
  }


}

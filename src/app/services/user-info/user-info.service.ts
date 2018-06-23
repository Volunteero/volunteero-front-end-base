import { Injectable } from '@angular/core';
import { UserRoleService } from '../user-role/user-role.service';
import { User, USER_STUB } from '../../models/User';
import { RouteAggregator, RouteAggregatorFactory } from '../../lib/RouteAggregator';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Organization } from '../../models/Organization';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private _userResourceAggregator: RouteAggregator;
  private _orgResourceAggregator: RouteAggregator;

  private userInfoSource: BehaviorSubject<User> = new BehaviorSubject<User>(USER_STUB);
  private userOrganizationSource: BehaviorSubject<Organization[]> = new BehaviorSubject([]);

  userInfo$: Observable<User> = this.userInfoSource.asObservable();
  userOrganizations$: Observable<Organization[]> = this.userOrganizationSource.asObservable();

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
          _res();
        } else {
          _res([]);
        }
      });
    });
  }

}

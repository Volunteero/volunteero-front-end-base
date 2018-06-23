import { Injectable } from '@angular/core';
import { UserRoleService } from '../user-role/user-role.service';
import { User, USER_STUB } from '../../models/User';
import { RouteAggregator, RouteAggregatorFactory } from '../../lib/RouteAggregator';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private _userResourceAggregator: RouteAggregator;
  private userInfoSource: BehaviorSubject<User> = new BehaviorSubject<User>(USER_STUB);

  userInfo$: Observable<User> = this.userInfoSource.asObservable();

  // FIXME: this is a very crappy way of sharing data
  constructor(private http: HttpClient) {
    this._userResourceAggregator = RouteAggregatorFactory
      .createMethodBasedUrlAggregator('https://volunteero-altar.herokuapp.com/altar/v1/');
    this._userResourceAggregator
      .registerResource('find', 'users/find', 'put');
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

}

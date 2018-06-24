import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UserInfoService } from '../../../services/user-info/user-info.service';
import { UserRoleService } from '../../../services/user-role/user-role.service';

@Component({
  selector: 'app-points-component',
  templateUrl: './points-component.component.html',
  styleUrls: ['./points-component.component.css']
})
export class PointsComponentComponent implements OnInit {


  private _currentUser: User;
  private _userInfo: User;


  constructor(
    private userInfoService: UserInfoService,
    private userRoleService: UserRoleService
  ) {
    this.userRoleService.user$.subscribe(
      user => {
        this._currentUser = user;
      });
    this.userInfoService.userInfo$.subscribe(
      userInfo => {
        this._userInfo = userInfo;
      });
  }

  get points(): number {
    return this._userInfo.points || 0;
  }

  ngOnInit() {
    // get the user informations
    this.userInfoService.getUserInformation(this._currentUser.username)
      .then(isSuccessful => {
        // Did not manage to retrieve anything 
        if (!isSuccessful) {
          console.warn('User information could not be retrieved')
          this.userInfoService.setUserInformation(this._currentUser);
        }
      });
  }


}

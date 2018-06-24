import { Component, OnInit } from '@angular/core';
import { HeaderEntity, HeaderEntityFactory } from '../../models/HeaderEntity';
import { UserInfoService } from '../../services/user-info/user-info.service';
import { UserRoleService } from '../../services/user-role/user-role.service';
import { User } from '../../models/User';
import { PointsComponentComponent } from '../profile-header/points-component/points-component.component';
import { ActionCapFactory, ComponentSwitchCap } from '../profile-feed/lib/ActionCap';
import { FeedEventsComponent } from '../profile-feed/feed-events/feed-events.component';
import { FeedCampaignsComponent } from '../profile-feed/feed-campaigns/feed-campaigns.component';
import { FeedOrganizationsComponent } from '../profile-feed/feed-organizations/feed-organizations.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private _currentUser: User;
  private _userInfo: User;

  get headerEntity(): HeaderEntity | null {
    const user = this._userInfo;
    if (typeof user === 'undefined') {
      return null;
    }
    const displayName = user.first_name
      ? `${user.first_name} ${user.last_name || ''}` : user.username;
    const contactName = user.username;
    const location = (user.city) ? `${user.city}, ${user.country}` : user.country;
    return HeaderEntityFactory.createBasicHeaderEntity(
      displayName, contactName, [location], PointsComponentComponent
    )
  }

  get pageType(): string { 
    return 'profile';
  }

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

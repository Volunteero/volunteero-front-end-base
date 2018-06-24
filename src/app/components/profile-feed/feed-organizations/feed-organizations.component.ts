import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { UserInfoService } from '../../../services/user-info/user-info.service';
import { User } from '../../../models/User';
import { Organisation } from '../../../models/Organisation';
import { Organization } from '../../../models/Organization';

@Component({
  selector: 'app-feed-organizations',
  templateUrl: './feed-organizations.component.html',
  styleUrls: ['./feed-organizations.component.css']
})
export class FeedOrganizationsComponent implements OnInit {

  private _user: User;
  private _organizations: Organization[];

  constructor(
    private userInfoService: UserInfoService
  ) {
    this.userInfoService.userInfo$.subscribe(
      userInfo => {
        this._user = userInfo;
        console.warn(userInfo);
        if (userInfo.user_id) {
          console.log(userInfo.user_id);
          this.userInfoService.getUserOrganizationsById(userInfo.user_id);
        }
      });
    this.userInfoService.userOrganizations$.subscribe(
      orgs => {
        console.log(orgs);
        this._organizations = orgs;
      }
    )
  }

  getOrganizationLink(org: Organization):string {
    return `/organizations/${org.id}`
  }

  get organizations() {
    return this._organizations;
  }

  ngOnInit() {
  }

}

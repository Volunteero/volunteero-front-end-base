import { Component, OnInit } from '@angular/core';
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

  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.userInfo$.subscribe(
      userInfo => {
        this._user = userInfo;
        if (userInfo.id) {
          this.userInfoService.getUserOrganizationsById(userInfo.id);
        }
      });
    this.userInfoService.userOrganizations$.subscribe(
      orgs => {
        console.log(orgs);
        this._organizations = orgs;
      }
    )
  }

  ngOnInit() {
  }

}

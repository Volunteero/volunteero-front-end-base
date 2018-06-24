import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../services/user-info/user-info.service';
import { User } from '../../../models/User';

// NOTE: only to be used for profile...
@Component({
  selector: 'app-feed-events',
  templateUrl: './feed-events.component.html',
  styleUrls: ['./feed-events.component.css']
})
export class FeedEventsComponent implements OnInit {


  private _user: User;
  private _events: Event[] = [];

  constructor(
    private userInfoService: UserInfoService
  ) {
    this.userInfoService.userInfo$.subscribe(
      userInfo => {
        this._user = userInfo;
        console.warn(userInfo);
        if (userInfo.user_id) {
          console.log(userInfo.user_id);
          this.userInfoService.getUserEvents(userInfo)
            .catch(error => {
              console.warn(error);
            });
        }
      });
    this.userInfoService.userEvents$.subscribe(
      events => {
        console.log(events);
        this._events = events;
      }
    )
  }


  get events() {
    return this._events;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderEntity, HeaderEntityFactory } from '../../models/HeaderEntity';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // some mock user stuff
  private _user = {
    firstName: 'Alice',
    lastName: 'Janoski',
    city: 'Washington',
    location: 'USA',
    username: 'ajanoski@yahoo.com',
  }

  get headerEntity(): HeaderEntity | null {
    const user = this._user;
    if (typeof user === 'undefined') {
      return null;
    }
    const displayName = `${user.firstName} ${user.lastName}`;
    const location = (user.city) ? `${user.city}, ${user.location}` : user.location;
    const contactName = user.username;
    // TODO: align what to do with points
    const points = 0;
    return HeaderEntityFactory.createBasicHeaderEntity(
      displayName, contactName, [location]
    )
  }

  constructor() { }

  ngOnInit() {
  }

}

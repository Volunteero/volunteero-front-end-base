import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent implements OnInit {

  private _tabs;

  constructor() { 
    this._tabs = [
      {
        title:'Events',
        id: 'event-feed-cap'
      },
      {
        title:'Campaigns',
        id: 'event-feed-cap'
      }
    ]
  }

  get tabs() {
    return this._tabs;
  }

  ngOnInit() {
  }

}

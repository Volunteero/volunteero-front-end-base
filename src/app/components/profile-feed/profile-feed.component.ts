import { Component, OnInit } from '@angular/core';
import { FeedEventsComponent } from './feed-events/feed-events.component';
import { FeedCampaignsComponent } from './feed-campaigns/feed-campaigns.component';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent implements OnInit {

  private _tabs;

  constructor() {
    // TODO: make a Tab class and all
    this._tabs = [
      {
        title: 'Events',
        id: 'event-feed-cap',
        component: FeedEventsComponent,
        active: false
      },
      {
        title: 'Campaigns',
        id: 'campaign-feed-cap',
        component: FeedCampaignsComponent,
        active: false
      }
    ];
    this._tabs[0].active = true;
  }

  get tabs() {
    return this._tabs;
  }

  get selectedComponent() {
    // get first active tab
    for (let tab of this._tabs) {
      if (tab.active) {
        // this.feedModule = this.compileComponet()
        return tab.component;
      }
    }
    return null;
  }

  // TODO: consider this horrible method while refactoring!
  selectTab(selectedTab){
    console.log(`Switching to ${selectedTab.id}`);
    this._tabs = this._tabs.map((tab)=>{
      tab.active = (tab.id === selectedTab.id);
      return tab;
    });
  }

  ngOnInit() {
  }

}

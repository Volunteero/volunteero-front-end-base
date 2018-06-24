import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FeedEventsComponent } from './feed-events/feed-events.component';
import { FeedCampaignsComponent } from './feed-campaigns/feed-campaigns.component';
import { ActionCapFactory, ComponentSwitchCap, ActionCap } from '../../lib/ActionCap';
import { FeedOrganizationsComponent } from './feed-organizations/feed-organizations.component';
import TabProvider from '../../lib/TabProvider';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent implements OnInit {

  // Feed tab controls
  private _tabs;
  private _type;

  @Input()
  set tabsType(value: string) {
    this._type = value;
  }

  // Profile extra actions
  private _extras;

  private _retrieveExtraActions(): Array<ActionCap> {
    return [
      // This one is added just for the sake of verifying the concept...
      ActionCapFactory.createRouteSwitchCap(
        'Compare', 'compare-profile', 'ratings'
      ).authorize(),

      // This one takes the user to the edit profile
      ActionCapFactory.createRouteSwitchCap(
        'Edit', 'edit-profile', '/profile/edit'
      ).authorize(),

      // Is not rendered out becuase it is not authorized - also to verify
      ActionCapFactory.createRouteSwitchCap(
        'Follow', 'follow-profile', ''
      ),
    ];
  }

  constructor() {
    
    this._extras = this._retrieveExtraActions();
  }

  get tabs() {
    return this._tabs;
  }

  get extraActions() {
    // TODO: investigate why
    // withour reverse, edit ended up the first 
    return this._extras.filter((action) => action.authorized).reverse();
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
  selectTab(selectedTab) {
    console.log(`Switching to ${selectedTab.id}`);
    console.log(this.tabs);
    this._tabs = this._tabs.map((tab: ComponentSwitchCap) => {
      tab.active = (tab.id === selectedTab.id);
      return tab;
    });
    console.log(this.tabs);
  }

  ngOnInit() {
    this._tabs = TabProvider.getTabs(this._type);
  }

}

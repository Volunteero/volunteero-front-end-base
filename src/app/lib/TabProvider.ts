import { ActionCapFactory } from "./ActionCap";
import { FeedEventsComponent } from "../components/profile-feed/feed-events/feed-events.component";
import { FeedCampaignsComponent } from "../components/profile-feed/feed-campaigns/feed-campaigns.component";
import { FeedOrganizationsComponent } from "../components/profile-feed/feed-organizations/feed-organizations.component";
import { EventListComponent } from "../components/organization-details/event-list/event-list.component";

export default class TabProvider {
  static getProfileTabs() {
    return [
      ActionCapFactory
        .createComponentSwitchCap(
          'Events', 'event-feed-cap', FeedEventsComponent
        ).activate(),
      ActionCapFactory
        .createComponentSwitchCap(
          'Campaigns', 'campaign-feed-cap', FeedCampaignsComponent
        ),
      ActionCapFactory
        .createComponentSwitchCap(
          'Organizations', 'organizations-feed-cap', FeedOrganizationsComponent
        )
    ];
  }

  static getOrganizationTabs() {
    return [
      ActionCapFactory
        .createComponentSwitchCap(
          'Events', 'event-feed-cap', EventListComponent
        ).activate(),
      ActionCapFactory
        .createComponentSwitchCap(
          'Campaigns', 'campaign-feed-cap', FeedCampaignsComponent
        )
    ];
  }


  static getTabs(pageType: string): Array<any> {
    console.log(pageType);
    switch (pageType) {
      case 'profile':
        return TabProvider.getProfileTabs();
      default:
        return [];
    }
  }
}
import { ActionCapFactory } from "./ActionCap";
import { FeedEventsComponent } from "../feed-events/feed-events.component";
import { FeedCampaignsComponent } from "../feed-campaigns/feed-campaigns.component";
import { FeedOrganizationsComponent } from "../feed-organizations/feed-organizations.component";

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
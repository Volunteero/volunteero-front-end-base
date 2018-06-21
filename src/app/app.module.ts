import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DiscoverComponent } from './components/discover/discover.component';
import { CreateComponent } from './components/create/create.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventsComponent } from './components/home/events/events.component';
import { EventComponent } from './components/home/events/event/event.component';
import { CampaignsComponent } from './components/home/campaigns/campaigns.component';
import { CampaignComponent } from './components/home/campaigns/campaign/campaign.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscoverEventComponent } from './components/discover/discover-event/discover-event.component';
import { DiscoverCampaignComponent } from './components/discover/discover-campaign/discover-campaign.component';
import { DiscoverOrganizationComponent } from './components/discover/discover-organization/discover-organization.component';
import { ActivityComponent } from './components/activity/activity.component';
import { TimelineComponent } from './components/activity/timeline/timeline.component';
import { SupportersComponent } from './components/activity/supporters/supporters.component';
import { ProfileFeedComponent } from './components/profile-feed/profile-feed.component';
import { FeedEventsComponent } from './components/profile-feed/feed-events/feed-events.component';
import { FeedCampaignsComponent } from './components/profile-feed/feed-campaigns/feed-campaigns.component';
import { RoleControlComponent } from './components/role-control/role-control.component';
import { ListRoleComponent } from './components/role-control/list-role/list-role.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { CreateOrganizationComponent } from './components/create/create-organization/create-organization.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    DiscoverComponent,
    CreateComponent,
    RouteNotFoundComponent,
    UserProfileComponent,
    EventsComponent,
    EventComponent,
    CampaignsComponent,
    CampaignComponent,
    DiscoverEventComponent,
    DiscoverCampaignComponent,
    DiscoverOrganizationComponent,
    ActivityComponent,
    TimelineComponent,
    SupportersComponent,
    ProfileFeedComponent,
    FeedEventsComponent,
    FeedCampaignsComponent,
    RoleControlComponent,
    ListRoleComponent,
    ProfileHeaderComponent,
    CreateOrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    FeedEventsComponent,
    FeedCampaignsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

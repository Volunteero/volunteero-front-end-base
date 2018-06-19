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
import {HttpClientModule} from '@angular/common/http';
import { ActivityComponent } from './components/activity/activity.component';
import { TimelineComponent } from './components/activity/timeline/timeline.component';
import { SupportersComponent } from './components/activity/supporters/supporters.component';
import { CreateOrganizationComponent } from './components/create/create-organization/create-organization.component';
import { CreatorInfoOverviewComponent } from './components/create/creator-info-overview/creator-info-overview.component';
import { CreateEventComponent } from './components/create/create-event/create-event.component';
import { CreateCampaignComponent } from './components/create/create-campaign/create-campaign.component';
import { CreateSponsorshipComponent } from './components/create/create-sponsorship/create-sponsorship.component';


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
    ActivityComponent,
    TimelineComponent,
    SupportersComponent,
    CreateOrganizationComponent,
    CreatorInfoOverviewComponent,
    CreateEventComponent,
    CreateCampaignComponent,
    CreateSponsorshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

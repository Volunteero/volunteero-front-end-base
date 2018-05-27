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
import { DiscoverEventComponent } from './components/discover/discover-event/discover-event.component';
import { DiscoverCampaignComponent } from './components/discover/discover-campaign/discover-campaign.component';
import { DiscoverOrganizationComponent } from './components/discover/discover-organization/discover-organization.component';


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
    DiscoverOrganizationComponent
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

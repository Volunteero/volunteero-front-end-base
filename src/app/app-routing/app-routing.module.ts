import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {RouteNotFoundComponent} from '../components/route-not-found/route-not-found.component';
import {DiscoverComponent} from '../components/discover/discover.component';
import {CreateComponent} from '../components/create/create.component';
import {UserProfileComponent} from '../components/user-profile/user-profile.component';
import {EventsComponent} from '../components/home/events/events.component';
import {CampaignsComponent} from '../components/home/campaigns/campaigns.component';
import {ActivityComponent} from '../components/activity/activity.component';
import {TimelineComponent} from '../components/activity/timeline/timeline.component';
import {SupportersComponent} from '../components/activity/supporters/supporters.component';
import {CreateOrganizationComponent} from '../components/create/create-organization/create-organization.component';
import {CreateEventComponent} from '../components/create/create-event/create-event.component';
import {CreateCampaignComponent} from '../components/create/create-campaign/create-campaign.component';
import {CreateSponsorshipComponent} from '../components/create/create-sponsorship/create-sponsorship.component';
import {OrganizationDetailsComponent} from '../components/organization-details/organization-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent

 /*
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'events', pathMatch: 'full'},
      {path: 'events', component: EventsComponent},
      {path: 'campaigns', component: CampaignsComponent}
    ]
 */
  },
  {path: 'discover', component: DiscoverComponent},

  {
    path: 'create', component: CreateComponent, children: [
      {path: 'event', component: CreateEventComponent},
      {path: 'campaign', component: CreateCampaignComponent},
      {path: 'sponsorship', component: CreateSponsorshipComponent}
    ]
  },
  {path: 'create/organization', component: CreateOrganizationComponent},

  {path: 'profile', component: UserProfileComponent},

  {path: 'organizations/:id', component: OrganizationDetailsComponent},
  {path: 'campaigns/:id', component: ActivityComponent},

  {path: 'events/:id', redirectTo: '/events/:id/timeline', pathMatch: 'full'},

  {
    path: 'events/:id', component: ActivityComponent, children: [
      {path: '', redirectTo: 'timeline', pathMatch: 'full'},
      {path: 'timeline', component: TimelineComponent},
      {path: 'supporters', component: SupportersComponent}
    ]
  },

  {path: '**', component: RouteNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

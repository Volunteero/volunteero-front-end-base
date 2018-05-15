import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {RouteNotFoundComponent} from '../components/route-not-found/route-not-found.component';
import {DiscoverComponent} from '../components/discover/discover.component';
import {CreateComponent} from '../components/create/create.component';
import {UserProfileComponent} from '../components/user-profile/user-profile.component';
import {EventsComponent} from '../components/home/events/events.component';
import {CampaignsComponent} from '../components/home/campaigns/campaigns.component';

const routes: Routes = [
  {path: '', redirectTo: '/home/events', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'events', pathMatch: 'full'},
      {path: 'events', component: EventsComponent},
      {path: 'campaigns', component: CampaignsComponent}
    ]
  },
  {path: 'discover', component: DiscoverComponent},
  {path: 'create', component: CreateComponent},
  {path: 'profile', component: UserProfileComponent},

  {path: '**', component: RouteNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

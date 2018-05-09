import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {RouteNotFoundComponent} from '../components/route-not-found/route-not-found.component';
import {DiscoverComponent} from '../components/discover/discover.component';
import {CreateComponent} from '../components/create/create.component';
import {UserProfileComponent} from '../components/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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

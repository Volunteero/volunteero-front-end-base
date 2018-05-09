import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {RouteNotFoundComponent} from '../components/route-not-found/route-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: RouteNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

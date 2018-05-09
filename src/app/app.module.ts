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


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    DiscoverComponent,
    CreateComponent,
    RouteNotFoundComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

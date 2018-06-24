import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserRoleService } from './services/user-role/user-role.service';
import { UserFactory } from './models/User';
import { TokenManager } from './models/Token';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userRoleService: UserRoleService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params !== {} && typeof params.token !== 'undefined') {
        console.log(params)
        const tokenString = params['token'];
        // TODO: add the token handling logic
        if (typeof tokenString === 'string' && tokenString != '') {
          const tm = new TokenManager(jwtDecode);
          const userToken = tm.decodeToUserToken(tokenString); // Print the parameter to the console. 
          const user = UserFactory.createUserFromToken(userToken, tokenString);
          console.log('AppComponent: decoded a user');
          console.log(user);
          this.userRoleService.setUser(user);
        }
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      const token = params['token'];
      console.log(token); // Print the parameter to the console. 
    });
  }
}

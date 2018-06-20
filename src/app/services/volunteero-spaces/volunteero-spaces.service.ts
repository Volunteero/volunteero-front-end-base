import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VolunteeroSpacesService {
  readonly gates_url: string;

  constructor() { 
    this.gates_url = 'https://volunteero-gates.herokuapp.com'
  }

  getGatesUrl() {
    return this.gates_url;
  }
}

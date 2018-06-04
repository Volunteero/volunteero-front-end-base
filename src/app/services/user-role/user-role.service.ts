import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../../models/Role';
import { of } from 'rxjs/internal/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  private eventsUrl = '';
  private selectedRole: Role;

  constructor(private http: HttpClient) {
    this.selectedRole = rolestub[0];
  }

  getUserRoles(): Observable<Role[]> {
    const listedRoles = rolestub.filter(role => role.id !== this.selectedRole.id);
    return of(listedRoles);
  }

  getCurrentRole(): Observable<Role> {
    return of(this.selectedRole);
  }
}

const rolestub = [
  {
    id: 1,
    displayName: '',
    title: 'Volunteer',
    level: 'hero',
    location: 'Eindhoven',
  }, {
    id: 2,
    displayName: '',
    title: 'UNESCO',
    level: 'member',
    location: 'worldwide',
  }, {
    id: 3,
    displayName: '',
    title: 'WWF',
    level: 'moderator',
    location: 'worldwide',
  }
];



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
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
  private selectedRoleSource: Subject<Role> = new Subject<Role>();
  private knownRolesSource: Subject<Role[]> = new Subject<Role[]>();

  selectedRole$ = this.selectedRoleSource.asObservable();
  knownRoles$ = this.knownRolesSource.asObservable();

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    console.log('Yo');
    this.selectedRoleSource.next(rolestub[0]);
    this.knownRolesSource.next(rolestub);
    console.log(this.selectedRole$);
  }


  setCurrentRole(role: Role) {
    console.log(role)
    this.selectedRoleSource.next(role);
  }
}

const rolestub = [
  {
    id: 1,
    displayName: '',
    title: 'Volunteer',
    level: 'hero',
    location: 'Eindhoven',
    imageUrl: ''
  }, {
    id: 2,
    displayName: '',
    title: 'UNESCO',
    level: 'member',
    location: 'worldwide',
    imageUrl: ''
  }, {
    id: 3,
    displayName: '',
    title: 'WWF',
    level: 'moderator',
    location: 'worldwide',
    imageUrl: ''
  }
];



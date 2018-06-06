import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { Role } from '../../models/Role';
import { of } from 'rxjs/internal/observable/of';
import { User, UserBuilder } from '../../models/User';

UserBuilder.build().set().set()

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  private userSource: Subject<User> = new Subject<User>();
  private selectedRoleSource: Subject<Role> = new Subject<Role>();
  private knownRolesSource: Subject<Role[]> = new Subject<Role[]>();

  user$ = this.userSource.asObservable();
  selectedRole$ = this.selectedRoleSource.asObservable();
  knownRoles$ = this.knownRolesSource.asObservable();

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    console.log('Yo');
    this.userSource.next(userStub);
    this.selectedRoleSource.next(rolestub[0]);
    this.knownRolesSource.next(rolestub);
    console.log(this.selectedRole$);
  }

  setUser

  setCurrentRole(role: Role) {
    console.log(role)
    this.selectedRoleSource.next(role);
  }
}


const userStub = {
  id: '',
  username: 'dafoe5',
  first_name: 'Willem',
  last_name: '',
  email: '',
  city: 'Appleton',
  country: 'United States',
  accessToken: ''
}

const rolestub = [
  {
    id: '1',
    displayName: '',
    title: 'Volunteer',
    level: 'hero',
    location: 'Eindhoven',
    imageUrl: '',
    accessToken: ''
  }, {
    id: '2',
    displayName: '',
    title: 'UNESCO',
    level: 'member',
    location: 'worldwide',
    imageUrl: '',
    accessToken: ''
  }, {
    id: '3',
    displayName: '',
    title: 'WWF',
    level: 'moderator',
    location: 'worldwide',
    imageUrl: '',
    accessToken: ''
  }
];



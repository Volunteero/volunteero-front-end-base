import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { Role } from '../../models/Role';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../../models/User';
import { RouteAggregator, SimpleUrlAggregator } from '../../lib/RouteAggregator';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserRoleService {
  private authRouteAggregator: RouteAggregator;

  private userSource: BehaviorSubject<User> = new BehaviorSubject<User>(userStub);
  private selectedRoleSource: BehaviorSubject<Role> = new BehaviorSubject<Role>(roleStub);
  private knownRolesSource: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([roleStub]);

  user$ = this.userSource.asObservable();
  selectedRole$ = this.selectedRoleSource.asObservable();
  knownRoles$ = this.knownRolesSource.asObservable();

  constructor(private http: HttpClient) {
    this.refresh();
    this.authRouteAggregator = new SimpleUrlAggregator('https://volunteero-auth.herokuapp.com/auth/');
    this.authRouteAggregator.registerResource('roles', 'roles');
  }

  refresh() {
    this.getUserRoles();
    this.selectedRoleSource.next(rolesStub[0]);
    this.knownRolesSource.next(rolesStub);
  }

  setUser(user: User) {
    console.log('RoleService: setting user');
    this.userSource.next(user);
    console.log(this.user$)
    this.refresh();
  }

  setCurrentRole(role: Role) {
    console.log('RoleService: setting role');
    this.selectedRoleSource.next(role);
  }

  getUserRoles() {
    const user = this.userSource.getValue();
    console.log('RC: getting uyser roles')
    console.log(user)
    if (user && user.accessToken) {
      let params = new URLSearchParams();
      params.append('accessToken', user.accessToken);
      // https://volunteero-auth.herokuapp.com/auth/roles?accessToken=....
      // this.http.get();
    }
  }
}


const userStub = {
  id: '',
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  city: '',
  country: '',
  bio: '',
  accessToken: ''
}

const roleStub = {
  id: '1',
  displayName: '',
  title: 'Volunteer',
  level: 'hero',
  location: 'Eindhoven',
  imageUrl: '',
  accessToken: ''
}

const rolesStub = [
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



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { Role } from '../../models/Role';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../../models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserRoleService {
  private userSource: BehaviorSubject<User> = new BehaviorSubject<User>(userStub);
  private selectedRoleSource: BehaviorSubject<Role> = new BehaviorSubject<Role>(roleStub);
  private knownRolesSource: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([roleStub]);

  user$ = this.userSource.asObservable();
  selectedRole$ = this.selectedRoleSource.asObservable();
  knownRoles$ = this.knownRolesSource.asObservable();

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    console.log('Yo');
    this.selectedRoleSource.next(rolesStub[0]);
    this.knownRolesSource.next(rolesStub);
  }

  setUser(user: User) {
    console.log('RoleService: setting user');
    this.userSource.next(user);
    console.log(this.user$)
  }

  setCurrentRole(role: Role) {
    console.log('RoleService: setting role');
    this.selectedRoleSource.next(role);
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



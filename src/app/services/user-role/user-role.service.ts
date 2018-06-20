import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { Role, RoleFactory, ResponseRole } from '../../models/Role';
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
  }

  setUser(user: User) {
    console.log('RoleService: setting user');
    this.userSource.next(user);
    console.log(this.user$)
    this.refresh();
  }

  setCurrentRole(role: Role) {
    console.log('RoleService: setting role');
    console.warn('RoleService: need assume role call implemented - a BE impediment');
    this.selectedRoleSource.next(role);
  }

  getUserRoles() {
    const user = this.userSource.getValue();
    console.log('RC: getting uyser roles')
    console.log(user)
    if (user && user.accessToken) {
      const url = this.authRouteAggregator.getResourceRoute('roles');
      let params = new HttpParams().set('accessToken', user.accessToken);
      this.http.get(url, { params: params }).subscribe((data: { roles: ResponseRole[] }) => {
        console.log('URS: got roles response!');
        console.log(data);
        const responseRoles = UserRoleService._parseRolesFromApiData(data.roles);
        console.log(responseRoles);

        // FIXME: should be removed when a proper BE solution is implemented 
        let roles = [UserRoleService._getGenericVolunteeroRole()];
        roles = roles.concat(responseRoles);

        this.knownRolesSource.next(roles);
      });
    }
  }

  static _parseRolesFromApiData(roles: ResponseRole[]): Role[] {
    return roles.map((role, index) => {
      /**
       * Now is initiliazed arbitrarily as we do not really have role ids
       */
      const roleId = `${index}_${role.roleName}`;
      console.warn('URS: access token is not retrievable!');
      return RoleFactory.createLeveledRole(role);
    })
  }

  /**
   * FIXME: implement a proper role backend policy so that this is not needed
   */
  static _getGenericVolunteeroRole(): Role {
    return RoleFactory.createGenericVolunteeroRole();
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

const roleStub = RoleFactory.createGenericVolunteeroRole();

const rolesStub = [
  {}
];



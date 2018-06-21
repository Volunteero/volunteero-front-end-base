import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Organization} from '../../models/Organization';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {UserRoleService} from '../user-role/user-role.service';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient, private userRoleService: UserRoleService) {
  }

  private baseUrl = 'http://localhost:1337/organizations';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: null
  };

  createOrganization(organization: any): Observable<any> {
    let retrievedUser: User;

    this.userRoleService.user$.subscribe((user: User) => {
      retrievedUser = user;

    });
    const accessToken = retrievedUser.accessToken;

    // Update the request information with user id
    organization.user_id = retrievedUser.id;

    // Add the token in the url query params
    this.httpOptions.params = new HttpParams().set('accessToken', accessToken);
    // refresh method from roles

    // entititID = organization_id

    return this.http.post(this.baseUrl, organization, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Organization} from '../../models/Organization';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private baseUrl = 'http://localhost:1337/organizations';

  constructor(private http: HttpClient) {
  }

  createOrganization(organization: Organization): Observable<any> {
    return this.http.post(this.baseUrl, organization).pipe(catchError(err => {
      return of(err);
    }));
  }
}

import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';
import {UserRoleService} from '../user-role/user-role.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpClient, private userRoleService: UserRoleService) {
  }

  private baseUrl = 'https://volunteero-campaigns.herokuapp.com/campaigns/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: null
  };

  createCampaign(campaign: any): Observable<any> {

    this.userRoleService.selectedRole$.subscribe((result) => {

      // Retrieve the organization_id
      campaign.organization_id = result.entityId;

      // Retrieve the access token
      const accessToken = this.userRoleService.activeAccessToken;

      // Add the token in the url query params
      this.httpOptions.params = new HttpParams().set('accessToken', accessToken.toString());

    });

    return this.http.post(this.baseUrl, campaign, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));

  }

  getCampaignById(id) {
    return this.http.get(this.baseUrl + id, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));
  }

}

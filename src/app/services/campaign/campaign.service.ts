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
      this.httpOptions.params = new HttpParams().set('accessToken', accessToken);

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


  getCampaignByIdMock(id) {
    return of({
      name: 'Campaign 1',
      id: 'asdasdasdasdas',
      influencePoints: 13123,
      organizationId: 'sadadsadasdsa',
      description: 'No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry. '
    });
  }
}

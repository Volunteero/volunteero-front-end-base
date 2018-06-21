import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://volunteero-events.herokuapp.com/events';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: null
  };

  createCampaign(campaign: any): Observable<any> {

    // Retrieve the access token
    const accessToken = '';
    // Update the campaign information with the organization id, which is retrieved from idk where
    campaign.organization_id = '';

    // Set the access token to the request, take it from idk where
    // Add the token in the url query params
    this.httpOptions.params = new HttpParams().set('accessToken', accessToken);

    return this.http.post(this.baseUrl, campaign, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));

  }


  getCampaignById(id) {
    return of({
      name: 'Campaign 1',
      id: 'asdasdasdasdas',
      influencePoints: 13123,
      organizationId: 'sadadsadasdsa',
      description: 'No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry. '
    });
  }
}

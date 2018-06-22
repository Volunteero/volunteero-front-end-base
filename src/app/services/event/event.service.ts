import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Event} from '../../models/Event';
import {of} from 'rxjs/internal/observable/of';
import {catchError} from 'rxjs/operators';
import {UserRoleService} from '../user-role/user-role.service';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private baseUrl = 'https://volunteero-events.herokuapp.com/events';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: null
  };


  constructor(private http: HttpClient, private userRoleService: UserRoleService) {
  }

  getEvents(): Observable<Event[]> {
    return of(eventsStub);
  }

  createEvent(event: any): Observable<any> {

    this.userRoleService.selectedRole$.subscribe((result) => {

      // Retrieve the organization_id
      event.organization_id = result.entityId;

      // Retrieve the access token
      const accessToken = this.userRoleService.activeAccessToken;

      // Add the token in the url query params
      this.httpOptions.params = new HttpParams().set('accessToken', accessToken);


    });
    console.log('WHAT IS BEING SEND');
    console.log(event);


    return this.http.post(this.baseUrl, event, this.httpOptions).pipe(catchError(err => {
      return of(err);
    }));
  }


  getEventById(id: string): Observable<Event> {
    return of({
      id: '1232312312312',
      name: 'Event 1 Name',
      description: 'Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage. ',
      start: '12:20',
      end: '13:50',
      location: 'Klokgebouw 280',
      volunteers: 40,
      category: 'Test',
      points: 50,
      organization_id: '123131312213213',
      available: true
    });

  }
}

const eventsStub = [{
  id: '1232312312312',
  name: 'Event 1 Name',
  description: 'Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage. ',
  start: '12:20',
  end: '13:50',
  location: 'Klokgebouw 280',
  volunteers: 40,
  category: 'Test',
  points: 50,
  organization_id: '123131312213213',
  available: true
}];



import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Event} from '../models/Event';
import {of} from 'rxjs/internal/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private eventsUrl = '';

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    return of(eventsStub);
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



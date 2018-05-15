import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Event} from '../../models/Event';
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

  getEventById(id: string): Observable<Event> {
    return of({
      'id': '123sd2',
      'name': 'Help the homeless rats',
      'description': 'There is a lot of poverty between the rats so the need help!',
      'startTime': 'Sep 30 15 AM',
      'endTime': 'Sep 30 16 PM',
      'location': 'Grave 5, Eindhoven',
      'peopleAttending': 135


    });
  }
}

const eventsStub = [{
  'id': '123sd2',
  'name': 'Help the homeless rats',
  'description': 'There is a lot of poverty between the rats so the need help!',
  'startTime': 'Sep 30 15 AM',
  'endTime': 'Sep 30 16 PM',
  'location': 'Grave 5, Eindhoven',
  'peopleAttending': 135


}, {
  'id': '123sd32232',
  'name': 'Save a mosquito',
  'description': 'Protect the mosquitosm and shit',
  'startTime': 'Sep 30 15 AM',
  'endTime': 'Sep 30 16 PM',
  'location': 'Grave 3, Eindhoven',
  'peopleAttending': 135
}];



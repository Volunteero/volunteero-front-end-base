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
      'start': 'Sep 30 15 AM',
      'end': 'Sep 30 16 PM',
      'location': 'Grave 5, Eindhoven',
      'volunteers': 135,
      'category': 'asd',
      'points': 23,
      'organizationId': 'asd',
      'available': true

    });

  }
}

const eventsStub = [{
  'id': '123sd2',
  'name': 'Help the homeless rats',
  'description': 'There is a lot of poverty between the rats so the need help!',
  'start': 'Sep 30 15 AM',
  'end': 'Sep 30 16 PM',
  'location': 'Grave 5, Eindhoven',
  'volunteers': 135,
  'category': 'asd',
  'points': 23,
  'organizationId': 'asd',
  'available': true

}, {
  'id': '123sd32232',
  'name': 'Save a mosquito',
  'description': 'Protect the mosquitosm and shit',
  'start': 'Sep 30 15 AM',
  'end': 'Sep 30 16 PM',
  'location': 'Grave 3, Eindhoven',
  'volunteers': 135,
  'category': 'asd',
  'points': 23,
  'organizationId': 'asd',
  'available': true
}];


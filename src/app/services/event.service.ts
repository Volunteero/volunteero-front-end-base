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
    return of(eventsMock);
  }
}

const eventsMock = [{
  'name': 'Help the homeless rats',
  'description': 'There is a lot of poverty between the rats so the need help!'
}, {
  'name': 'Save a mosquito',
  'description': 'Protect the mosquitosm and shit'
}];



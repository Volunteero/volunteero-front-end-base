import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


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


}


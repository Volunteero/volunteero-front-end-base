import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() {
  }

  getCampaignById(id) {
    return of({'wasd': 123});
  }
}

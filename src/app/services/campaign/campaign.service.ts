import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() {
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

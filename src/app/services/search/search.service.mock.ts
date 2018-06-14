import { Injectable } from '@angular/core';
import { SearchResult } from '../../models/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  public async search(query?: String, entityType?: String): Promise<SearchResult> {
    const result = {
      events: [{
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
      }],
      organizations: [
        {
          id: 'string',
          user_id: 'string',
          event_ids: [
            'string'
          ],
          campaign_ids: [
            'string'
          ],
          organization_name: 'Organisation 1 Name',
          organization_description: 'Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. '
        }],
      campaigns: [{
        name: 'Campaign 1',
        id: 'asdasdasdasdas',
        influencePoints: 13123,
        organizationId: 'sadadsadasdsa',
        description: 'No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry. '
      }]
    };
    if (entityType === 'Events') {

      result.organizations = [];
      result.campaigns = [];
    }
    if (entityType === 'Organizations') {

      result.events = [];
      result.campaigns = [];
    }
    if (entityType === 'Campaigns') {

      result.events = [];
      result.organizations = [];
    }
    return result;
  }
}

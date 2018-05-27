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
        name: 'Event 1',
        description: 'String',
        startTime: 'String',
        endTime: 'String',
        location: 'String',
        peopleAttending: 23,
      }],
      organizations: [
        {
          organization_id: 'string',
          user_id: 'string',
          event_ids: [
            'string'
          ],
          campaign_ids: [
            'string'
          ],
          organization_name: 'Organisation 1',
          organization_description: 'string'
        }],
      campaigns: [{
        name: 'Campaign 1'
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

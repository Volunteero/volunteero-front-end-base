import { Injectable } from '@angular/core';
import { SearchResult } from '../../models/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  public async search(query?: string, entityType?: string): Promise<SearchResult> {
   
    if(!query){

      return {
        events: [],
        campaigns: [],
        organizations: []
      }
    }
    let queryString = `keyword=${encodeURIComponent(query)}`;
    if(entityType){
      queryString += `&type=${entityType}`;
    }
    return await fetch(`https://volunteero-search.herokuapp.com/api/v1/search?${queryString}`).then(r => r.json());
  }
}

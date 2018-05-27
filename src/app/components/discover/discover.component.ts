import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { SearchResult } from '../../models/SearchResult';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})

export class DiscoverComponent implements OnInit {

  searchResults: SearchResult;
  selectedResourceType: String;

  constructor(private searchService: SearchService) {

    this.selectedResourceType = 'Anything';
  }

  ngOnInit() {

    this.searchResults = {
      events: [],
      organizations: [],
      campaigns: []
    };
    this.search();
  }

  onResourceTypeChanged(newSelectedResourceType: String, searchQuery: String) {

    this.selectedResourceType = newSelectedResourceType;
    this.search(searchQuery);
  }

  async search(searchQuery?: String) {

    const result = await this.searchService.search(searchQuery, this.selectedResourceType);
    this.searchResults = result;
  }

}

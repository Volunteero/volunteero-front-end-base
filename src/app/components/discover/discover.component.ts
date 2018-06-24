import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { SearchResult } from '../../models/SearchResult';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})

export class DiscoverComponent implements OnInit {

  searchResults: SearchResult;
  noResults: boolean;
  selectedResourceType: string;

  constructor(private searchService: SearchService, private snotifyService: SnotifyService) {

    this.selectedResourceType = 'any';
  }

  ngOnInit() {

    this.searchResults = {
      events: [],
      organizations: [],
      campaigns: []
    };
    this.noResults = true;
    this.search();
  }

  onResourceTypeChanged(newSelectedResourceType: string, searchQuery: string = '') {

    this.selectedResourceType = newSelectedResourceType;
    this.search(searchQuery);
  }

  async search(searchQuery?: string) {
    
    const startDate = new Date().getTime();
    let type = this.selectedResourceType.toLowerCase();
    const result = await this.searchService.search(searchQuery, type);
    if (result.campaigns.length + result.events.length + result.organizations.length === 0) {

      this.noResults = true;
    } else {

      this.noResults = false;
    }
    this.searchResults = result;
    this.snotifyService.success(`Search completed in ${new Date().getTime() - startDate}ms`, {
      showProgressBar: false,      
    });
  }

}

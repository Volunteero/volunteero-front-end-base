import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../models/Organization';
import { Event } from '../../../models/Event';
import { OrganizationService } from '../../../services/organization/organization.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  private _organization: Organization;
  private _events: Event[] = [];

  constructor(private orgService: OrganizationService) {
    this.orgService.organization$.subscribe((org) => {
      this._organization = org;
      if (org) {
        this.orgService.getOrganizationEvents(org.id);
      }
    })
    this.orgService.orgEvents$.subscribe((events) => {
      console.log('Got campaigns');
      console.log(events);
      this._events = events;
    })
  }

  ngOnInit() {
    this._organization = this.orgService.currenOrganization;
  }

  // Fake it till you make it 
  get events() {
    return this._events
  }
}

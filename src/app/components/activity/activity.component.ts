import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {EventService} from '../../services/event/event.service';
import {Event} from '../../models/Event';
import {CampaignService} from '../../services/campaign/campaign.service';
import {Campaign} from '../../models/Campaign';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  // Initial values needed, otherwise errors are thrown for non existent properties in the html file
  event: Event = {} as Event;
  campaign: Campaign = {} as Campaign;

  constructor(private route: ActivatedRoute, private eventService: EventService, private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const typeOfActivity = this.route.snapshot.url[0].path;
    const id = this.route.snapshot.paramMap.get('id');

    switch (typeOfActivity) {
      case 'events':
        this.getEvent(id);
        break;
      case 'campaigns':
        this.getCampaign(id);
        break;
    }
  }

  private getEvent(id: string): void {
    this.eventService.getEventById(id)
      .subscribe(event => this.event = event);
  }

  private getCampaign(id: string) {
    this.campaignService.getCampaignById(id)
      .subscribe(campaign => this.campaign = campaign);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../../models/Campaign';

@Component({
  selector: 'app-discover-campaign',
  templateUrl: './discover-campaign.component.html',
  styleUrls: ['./discover-campaign.component.css']
})
export class DiscoverCampaignComponent implements OnInit {

  @Input() campaign: Campaign;
  constructor() { }

  ngOnInit() {
  }

}

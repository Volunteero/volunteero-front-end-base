import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../services/organization/organization.service';
import { Organization } from '../../../models/Organization';
import { Campaign } from '../../../models/Campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  private _organization: Organization;
  private _campaigns: Campaign[];

  constructor(private orgService: OrganizationService) {
    this.orgService.organization$.subscribe((org) => {
      this._organization = org;
    })
    this.orgService.orgCampaigns$.subscribe((campaigns) => {
      console.log('Got campaigns');
      console.log(campaigns);
      this._campaigns = campaigns;
    })
  }

  ngOnInit() {
    this._organization = this.orgService.currenOrganization;
    this.orgService.getOrganizationCampaigns(this._organization.id);
  }

  get campaigns() : Campaign[] {
    return this._campaigns;
  }
}

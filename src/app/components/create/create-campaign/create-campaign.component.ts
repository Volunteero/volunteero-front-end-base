import {Component, OnInit} from '@angular/core';
import {CampaignService} from '../../../services/campaign/campaign.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  constructor(private campaignService: CampaignService, private router: Router) {
  }

  ngOnInit() {
  }

  createCampaign(name: string, description: string, influencePoints: string) {
    const campaign = {'name': name, 'description': description, 'influencePoints': influencePoints};

    this.campaignService.createCampaign(campaign).subscribe((result) => {

      // Retrieve the id
      const campaign_id = result.campaign_id;

      if (campaign_id) {
        // TODO snotify that you've been redirected

        this.router.navigate(['/campaigns/' + campaign_id]);
      } else {

        console.log('THE ERROR when creating a campaign');
        // TODO use snotify here
        alert('SOme error occured while creating the campaign');
      }

    });
  }
}

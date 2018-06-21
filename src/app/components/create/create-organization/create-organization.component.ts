import {Component, OnInit} from '@angular/core';
import {Organization} from '../../../models/Organization';
import {OrganizationService} from '../../../services/organization/organization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  constructor(private organizationService: OrganizationService, private router: Router) {
  }

  ngOnInit() {

  }

  createOrganization(name: String, description: String) {

    // Retrieve data
    const organization = {'organization_name': name, 'organization_description': description};


    this.organizationService.createOrganization(organization).subscribe(result => {

      const organization_id = result.organization_id;

      if (organization_id) {
        // TODO snotify that you've been redirected

        this.router.navigate(['/profile/'.concat(organization_id)]);
      } else {

        console.log('THE ERROR when creating and organization');
        // TODO use snotify here
        alert('SOme error occured while creating the orgazanitions');
      }
    });
  }

}

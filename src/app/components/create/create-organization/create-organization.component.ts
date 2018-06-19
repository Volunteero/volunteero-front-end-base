import {Component, OnInit} from '@angular/core';
import {Organization} from '../../../models/Organization';
import {OrganizationService} from '../../../services/organization/organization.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
  }

  createOrganization(name: String, description: String) {

    const organization = {'organizationName': name, 'organizationDescription': description} as Organization;
    console.log(organization);
    this.organizationService.createOrganization(organization).subscribe(response => {
      console.log(response);
    });
  }

}

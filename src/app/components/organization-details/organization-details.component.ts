import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../services/organization/organization.service';
import { Organization } from '../../models/Organization';
import { HeaderEntityFactory } from '../../models/HeaderEntity';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private organizationService: OrganizationService) {
  }

  public organization: Organization;

  get headerEntity() {
    const organization = this.organization;
    if (typeof organization === 'undefined') {
      return  HeaderEntityFactory.createBasicHeaderEntity(
        '', ''
      );
    }
    const title = organization.organization_name || '';
    const subtitle = organization.organization_description || '';
    return HeaderEntityFactory.createBasicHeaderEntity(
      title, subtitle
    )
  }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    const id = this.route.snapshot.paramMap.get('id');

    this.organizationService.getOrganizationById(id).subscribe((organization) => {
      this.organization = organization;
    });

  }

}

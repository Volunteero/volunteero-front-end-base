import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganizationService} from '../../services/organization/organization.service';
import {Organization} from '../../models/Organization';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private organizationService: OrganizationService) {
  }

  public organization: Organization;

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

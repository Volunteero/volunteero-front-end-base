import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../services/organization/organization.service';
import { Organization } from '../../models/Organization';
import { HeaderEntityFactory } from '../../models/HeaderEntity';
import TabProvider from '../../lib/TabProvider';
import { ActionCap, ComponentSwitchCap } from '../../lib/ActionCap';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  private _tabs: ComponentSwitchCap[] = [];

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService
  ) {
    this._tabs = TabProvider.getOrganizationTabs();
  }

  public organization: Organization;

  get headerEntity() {
    const organization = this.organization;
    if (typeof organization === 'undefined') {
      return HeaderEntityFactory.createBasicHeaderEntity(
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
      this.organizationService.setOrganization(organization);
    });
  }

  // FIXME: this is a very smell piece of duplicated code

  get selectedComponent() {
    // get first active tab
    for (let tab of this._tabs) {
      if (tab.active) {
        // this.feedModule = this.compileComponet()
        return tab.component;
      }
    }
    return null;
  }

  selectTab(selectedTab) {
    console.log(`Switching to ${selectedTab.id}`);
    console.log(this.tabs);
    this._tabs = this._tabs.map((tab: ComponentSwitchCap) => {
      tab.active = (tab.id === selectedTab.id);
      return tab;
    });
    console.log(this.tabs);
  }

  get tabs() {
    return this._tabs;
  }

}

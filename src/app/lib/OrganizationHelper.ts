import { RouteAggregator, RouteAggregatorFactory } from "./RouteAggregator";
import { Organization } from "../models/Organization";
import { HttpClient } from '@angular/common/http';

export class OrganizationHelper {

  private orgRouteAggregator: RouteAggregator;

  constructor(private http: HttpClient) {
    this.orgRouteAggregator = RouteAggregatorFactory
      .createSimpleUrlAggregator('https://volunteero-organizations.herokuapp.com/');
    this.orgRouteAggregator
      .registerResource('organizations', 'organizations');
  }


  getOrganizationInfo(organizationId: string): Promise<Organization> {

    return new Promise((_res) => {
      const orgRoute = this.orgRouteAggregator.getResourceRoute('organizations');
      const fullRoute = `${orgRoute}/${organizationId}`;
      this.http.get(fullRoute).subscribe((result: Organization) => {
        console.info(result);
        if (result) {

          _res(result);
        }
      })
    })
  }
}
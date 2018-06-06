import { Component, OnInit, Input } from '@angular/core';
import { Organisation } from '../../../models/Organisation';

@Component({
  selector: 'app-discover-organization',
  templateUrl: './discover-organization.component.html',
  styleUrls: ['./discover-organization.component.css']
})
export class DiscoverOrganizationComponent implements OnInit {

  @Input() organization: Organisation;
  constructor() { }

  ngOnInit() {
  }

}

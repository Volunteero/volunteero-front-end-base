import {Component, OnInit} from '@angular/core';
import {UserRoleService} from '../../services/user-role/user-role.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private userRole: UserRoleService) {
  }

  userHasOrganizationRole: boolean;

  ngOnInit() {
  }

}

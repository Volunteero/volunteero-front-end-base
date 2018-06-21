import {Component, OnInit} from '@angular/core';
import {UserRoleService} from '../../services/user-role/user-role.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public userRole: UserRoleService) {
  }

  userHasOrganizationRole: boolean;

  ngOnInit() {
    this.userRole.selectedRole$.subscribe((result) => {
      this.userHasOrganizationRole = result.userHasOrganizationRole;
    });
  }

}

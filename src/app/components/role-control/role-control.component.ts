import { Component, OnInit, Input } from '@angular/core';
import { UserRoleService } from '../../services/user-role/user-role.service';
import { Role } from '../../models/Role';
import { User } from '../../models/User';

@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  styleUrls: ['./role-control.component.css']
})
export class RoleControlComponent implements OnInit {

  @Input()
  public styling = {
    item: "dropdown-item",
    divider: "dropdown-divider"
  }

  public selectedRole: Role;
  public knownRoles: Role[];
  public user: User;

  constructor(
    private userRoleService: UserRoleService
  ) {
    userRoleService.user$.subscribe(
      user => {
        console.log('RC: Got user');
        console.log(user);
        this.user = user;
      });
    userRoleService.selectedRole$.subscribe(
      role => {
        this.selectedRole = role;
      });
    userRoleService.knownRoles$.subscribe(
      roles => {
        this.knownRoles = roles;
      });
  }

  /**
   * Computed properties
   */

  get displayName() {
    if (this.user) {
      return this.user.first_name || this.user.username;
    }
  }

  /**
   * Logic
   */

  ngOnInit() {
    this.userRoleService.refresh();
  }

  selectRole(role: Role): void {
    console.log(role);
    this.userRoleService.setCurrentRole(role)
  }
}

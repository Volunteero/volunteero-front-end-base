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
  private styling = {
    item: "dropdown-item",
    divider: "dropdown-divider"
  }

  private selectedRole: Role;
  private knownRoles: Role[];
  private user: User;

  constructor(private roleService: UserRoleService) {
    roleService.user$.subscribe(
      user => {
        this.user = user;
      });
    roleService.selectedRole$.subscribe(
      role => {
        this.selectedRole = role;
      });
    roleService.knownRoles$.subscribe(
      roles => {
        this.knownRoles = roles;
      });
  }

  /**
   * Computed properties
   */

  get displayName() {
    return (this.selectedRole.displayName !== '') ? this.selectedRole
      : this.fullName;
  }

  get fullName() {
    const firstNamePart = this.user.first_name;
    const secondNamePart = (
      typeof this.user.last_name === 'string' && this.user.last_name !== ''
    ) ? ` ${this.user.last_name}` : '';
    return `${firstNamePart}${secondNamePart}`
  }

  /**
   * Logic
   */

  ngOnInit() {
    this.roleService.refresh();
  }

  selectRole(role: Role): void {
    console.log(role);
    this.roleService.setCurrentRole(role)
  }
}

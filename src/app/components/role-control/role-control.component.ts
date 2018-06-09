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
    if (this.selectedRole) {
      return (this.selectedRole.displayName !== '') ? this.selectedRole
        : this.fullName;
    }
    console.warn('A selectedRole is not available...')
  }

  get fullName() {
    if (this.user) {
      const firstNamePart = this.user.first_name;
      const secondNamePart = (
        typeof this.user.last_name === 'string' && this.user.last_name !== ''
      ) ? ` ${this.user.last_name}` : '';
      return `${firstNamePart}${secondNamePart}`
    }
    console.warn('A user is not available...')
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

import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/user-role/user-role.service';
import { Role } from '../../models/Role';

@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  styleUrls: ['./role-control.component.css']
})
export class RoleControlComponent implements OnInit {

  private styling = {
    item: "dropdown-item",
    divider: "dropdown-divider"
  }

  private selectedRole: Role;
  private knownRoles: Role[];

  constructor(private roleService: RoleService) {
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
    return (this.selectedRole.displayName !== '') ? this.selectedRole : 'Dickson';
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

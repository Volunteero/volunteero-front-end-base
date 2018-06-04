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

  private selectedRole: Role = null;
  private roles: Role[] = [];

  constructor(private roleService: RoleService) { }

  /**
   * Computed properties
   */

  get displayName() {
    return '';
  }

  /**
   * Logic
   */

  ngOnInit() {
    this.getCurrentRole();
    this.getRoles();
  }

  getCurrentRole(): void {
    this.roleService.getCurrentRole().subscribe(role => {
      this.selectedRole = role;
    })
  }

  getRoles(): void {
    this.roleService.getUserRoles().subscribe(roles => {
      this.roles = roles;
    });
  }
}

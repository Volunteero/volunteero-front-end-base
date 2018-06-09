import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../services/user-role/user-role.service';
import { User } from '../../models/User';
import { Role } from '../../models/Role';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  private user: User;
  private role: Role;

  constructor(private roleService: UserRoleService) {
    roleService.user$.subscribe(
      user => {
        this.user = user;
      });
    roleService.selectedRole$.subscribe(
      role => {
        this.role = role;
      });
  }

  get displayName() {
    const userPart = this.user.first_name || this.user.username;
    const rolePart = this.role.title || '';
    return `${userPart} (${rolePart})`;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../services/user-role/user-role.service';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
import { VolunteeroSpacesService } from '../../services/volunteero-spaces/volunteero-spaces.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  private user: User;
  private role: Role;
  readonly fallback_url: string;

  constructor(
    private userRoleService: UserRoleService, 
    private vSpacesService: VolunteeroSpacesService 
  ) {
    userRoleService.user$.subscribe(
      user => {
        this.user = user;
      });
      userRoleService.selectedRole$.subscribe(
      role => {
        this.role = role;
      });
      this.fallback_url = vSpacesService.getGatesUrl();
  }

  get displayName() {
    const userPart = this.user.first_name || this.user.username;
    const rolePart = this.role.title || '';
    return `${userPart} (${rolePart})`;
  }

  ngOnInit() {
  }

}

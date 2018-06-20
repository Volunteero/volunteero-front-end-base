import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../services/user-role/user-role.service';
import { User } from '../../models/User';
import { Role, RoleFactory } from '../../models/Role';
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
        console.log('Got user');
        console.log(user);
        this.user = user;
      });
    userRoleService.selectedRole$.subscribe(
      role => {
        console.log('Got role')
        console.log(role)
        this.role = role;
      });
    this.fallback_url = vSpacesService.getGatesUrl();
  }

  get displayName() {
    if (this.user) {
      const userPart = this.user.first_name || this.user.username;
      const rolePart = (this.role) ? this.role.title : '';
      return `${userPart} (${rolePart})`;
    }
    return '';
  }

  
  get profileRouterLink() : String {
    const routeBase = '/profile';
    if(this.role.entityId !== RoleFactory.createGenericVolunteeroRole().entityId){
      const extra = this.role.entityId;
      return `${routeBase}/${extra}`;
    }
    return routeBase;
  }

  ngOnInit() {
  }

}

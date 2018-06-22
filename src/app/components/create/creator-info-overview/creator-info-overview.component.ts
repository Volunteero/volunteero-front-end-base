import {Component, OnInit} from '@angular/core';
import {UserRoleService} from '../../../services/user-role/user-role.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-creator-info-overview',
  templateUrl: './creator-info-overview.component.html',
  styleUrls: ['./creator-info-overview.component.css']
})
export class CreatorInfoOverviewComponent implements OnInit {
  public user: User;

  constructor(private userRoleService: UserRoleService) {

  }

  ngOnInit() {
    this.userRoleService.user$.subscribe((user) => {
      this.user = user;

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/user-role/user-role.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(private roleService: RoleService) { }

  ngOnInit() {
  }

}

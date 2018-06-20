import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../../../models/Role';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  constructor() { }

  @Input() role: Role;

  ngOnInit() {
  }

}

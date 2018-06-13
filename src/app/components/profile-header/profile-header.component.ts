import { Component, OnInit, Input } from '@angular/core';
import { HeaderEntity } from '../../models/HeaderEntity';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  private _entity: HeaderEntity = {
    displayName: '',
    location: '',
    points: 0,
    contactName: 'string',
  };

  @Input()
  set entity(entity: HeaderEntity) {
    this._entity = entity;
  }

  get displayName() {
    return this._entity.displayName;
  }

  
  constructor() { }

  ngOnInit() {
  }

}

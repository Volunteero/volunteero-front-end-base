import { Component, OnInit, Input } from '@angular/core';
import { HeaderEntity } from '../../models/HeaderEntity';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  private _entity: HeaderEntity = {
    title: '',
    subtitle: '',
    extras: []
  };

  @Input()
  set entity(entity: HeaderEntity) {
    this._entity = entity;
  }

  get title() {
    return this._entity.title || this._entity.subtitle;
  }

  get subtitle() {
    return this._entity.subtitle;
  }

  get extras() {
    return this._entity.extras;
  }


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { HeaderEntity } from '../../models/HeaderEntity';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  private imageUrlPlaceholder = '../../../assets/images/avatar.png';

  private _entity: HeaderEntity = {
    title: '',
    subtitle: '',
    extras: [],
  };
  private _extraComponent: any;

  @Input()
  set entity(entity: HeaderEntity) {
    this._entity = entity;
  }

  @Input()
  set extraComponent(value) {
    this._extraComponent = value;
  }

  get title() {
    return this._entity.title || this._entity.subtitle;
  }

  get subtitle() {
    const treshold = 100;
    return (this._entity.subtitle.length > treshold)
      ? `${this._entity.subtitle.substr(0, treshold)}...` : this._entity.subtitle;
  }

  get extras() {
    return this._entity.extras;
  }

  get extraComponent() {
    return this._entity.pluginComponent;
  }

  get imageUrl() {
    return this._entity.imageUrl || this.imageUrlPlaceholder;
  }

  constructor() { }

  ngOnInit() {
  }

}

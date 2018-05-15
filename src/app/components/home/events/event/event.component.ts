import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../models/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() {
  }


  @Input() event: Event;

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../models/Event';

@Component({
  selector: 'app-discover-event',
  templateUrl: './discover-event.component.html',
  styleUrls: ['./discover-event.component.css']
})
export class DiscoverEventComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}

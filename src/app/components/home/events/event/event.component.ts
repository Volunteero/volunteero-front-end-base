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

  public test_var = '5af8834be636b12364a020eb';

  @Input() event: Event;

  ngOnInit() {
  }

  onEventDetails(eventId: string) {

  }
}

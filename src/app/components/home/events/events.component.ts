import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events;
    // });
  }

}

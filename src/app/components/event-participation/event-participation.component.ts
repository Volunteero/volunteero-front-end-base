import {Component, OnInit} from '@angular/core';
import {EventParticipationService} from '../../services/event/event-participation/event-participation.service';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-participation',
  templateUrl: './event-participation.component.html',
  styleUrls: ['./event-participation.component.css']
})
export class EventParticipationComponent implements OnInit {

  constructor(public eventParticipationService: EventParticipationService, private eventService: EventService) {
  }

  ngOnInit() {
  }

  changeParticipationStatus() {


  }

}

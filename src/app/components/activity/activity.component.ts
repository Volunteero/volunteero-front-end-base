import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {EventService} from '../../services/event.service';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  event: Event;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private location: Location) {
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventById(id)
      .subscribe(event => this.event = event);
  }
}

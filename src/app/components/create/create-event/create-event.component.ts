import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit() {
  }

  createEvent(name: string, description: string, start: string, end: string, location: string,
              volunteers: string, category: string, points: number) {

    const event = {
      'name': name,
      'description': description,
      'start': start,
      'end': end,
      'location': location,
      'volunteers': volunteers,
      'category': category
    };

    this.eventService.createEvent(event).subscribe((result) => {

      // Retrieve the id
      const event_id = result.event_id;

      if (event_id) {
        // TODO snotify that you've been redirected

        this.router.navigate(['/profile/'.concat(event_id)]);
      } else {

        console.log('THE ERROR when creating and event');
        // TODO use snotify here
        alert('SOme error occured while creating the event');
      }

    });


  }

}

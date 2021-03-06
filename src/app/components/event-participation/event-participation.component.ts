import {Component, Input, OnInit} from '@angular/core';
import {EventParticipationService} from '../../services/event/event-participation/event-participation.service';
import {EventService} from '../../services/event/event.service';
import {UserRoleService} from '../../services/user-role/user-role.service';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-event-participation',
  templateUrl: './event-participation.component.html',
  styleUrls: ['./event-participation.component.css']
})
export class EventParticipationComponent implements OnInit {

  constructor(public eventParticipationService: EventParticipationService, private eventService: EventService, private userRoleService: UserRoleService) {
  }

  @Input() event_id: string;
  private user_id: string;

  ngOnInit() {
    this.setInitialParticipationStatus();
  }


  changeParticipationStatus() {

    if (this.eventParticipationService.participates) {
      this.eventService.cancelEventParticipation(this.event_id, this.user_id).subscribe((result) => {
        console.log('FROM CANCEL PARTICIPATE INTO EVENT');
        console.log(result);

        if (result._id) {
          this.eventParticipationService.participates = false;
          // TODO Snotify here
        } else {
          alert('Some error occured while calling CANCEL participate into event');
        }

      });

      // Cancel user participation
    } else {

      this.eventService.participateIntoEvent(this.event_id, this.user_id).subscribe((result) => {
        console.log('FROM PARTICIPATE INTO EVENT');
        console.log(result);

        if (result._id) {
          this.eventParticipationService.participates = true;
          // TODO Snotify here

        } else {
          alert('Some error occured while calling participate into event');
        }
      });
    }

  }

  private setInitialParticipationStatus() {

    this.userRoleService.user$.subscribe((user) => {
      this.user_id = user.id;

      this.eventService.checkEventParticipationStatus(this.event_id, this.user_id).subscribe((result) => {
        console.log('HERE IS THE RESULT OF CHECK PARTICIPATION STATUS');
        console.log(result);

        this.eventParticipationService.participates = result.enrolled;
      });
    });

  }

}

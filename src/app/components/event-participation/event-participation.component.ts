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

  ngOnInit() {
  }


  changeParticipationStatus() {
    if (this.eventParticipationService.participates) {
      // Cancel user participation
    } else {
      // Make user participate
    }

  }

  private setInitialParticipationStatus() {

    this.userRoleService.user$.subscribe((user) => {
      const user_id = user.id;

      this.eventService.checkEventParticipationStatus(this.event_id, user_id).subscribe((result) => {
        console.log('HERE IS THE RESULT OF CHECK PARTICIPATION STATUS');
        console.log(result);
        // Check if the user participates in the current event
        // If he does update the boolean service
      });
    });

  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  createEvent(name: string, description: string, start: string, end: string, location: string,
              volunteers: string, category: string, points: number) {

    console.log(event);

  }

}

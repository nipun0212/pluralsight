import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import {Event} from './shared/event.model';
@Component({
  selector: 'app-events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <app-event-thumbnail [event]="event" (click)="showToast(event)"></app-event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events:Event;
  constructor(private eventService:EventsService,private route:ActivatedRoute) { }

  ngOnInit() {
  this.events = this.route.snapshot.data['eventsssss'];
  }

  showToast(name){
  }
}

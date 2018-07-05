import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../shared/events.service';
import { Event } from '../shared/event.model';
import { Session } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  addMode: boolean = false;
  filterBy:string='all';
  sortBy:string='name';
  constructor(private eventService: EventsService, private route: ActivatedRoute) { }
  @Input() event: Event;
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
  addSession() {
    this.addMode = true;
    console.log(this.addMode)
  }
  createSession(session: Session) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancel(){
    this.addMode = false;
  }
}

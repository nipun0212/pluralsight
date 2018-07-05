import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Component({
  selector: 'app-evnets-create',
  templateUrl: './evnets-create.component.html',
  styleUrls: ['./evnets-create.component.css']
})
export class EvnetsCreateComponent{

  newEvent
  isDirty: boolean = true
  constructor(private router: Router, private eventService: EventsService) {

  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}

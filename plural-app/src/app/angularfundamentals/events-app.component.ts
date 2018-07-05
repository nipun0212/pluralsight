import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
<app-nav-bar></app-nav-bar>
<app-events-list></app-events-list> 
<router-outlet></router-outlet>
  `,
  styles: []
})
export class EventsAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

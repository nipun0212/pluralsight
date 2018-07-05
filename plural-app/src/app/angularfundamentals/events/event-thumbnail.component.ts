import { Component, OnInit, Input, Output, EventEmitter,Inject, inject } from '@angular/core';
import { Event } from './shared/event.model';
import { GAPI_TOKEN} from '../shared/gapi.service'
@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink] = "[event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name | uppercase}}</h2>
      <div>Date: {{event.date |date:"shortDate"}}</div>
      <div  [ngClass]="getClassCSS()" [ngStyle]="getStyle()" [ngSwitch]="event?.time">Time: {{event.time}}
       <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{event.price|currency:"USD"}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event.location?.address}}</span>
        <span class="pad-left">{{event.location?.city}}, {{event.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{event.onlineUrl}}
      </div>
  `,
  styles: [`
    .green {color:#003300 !important;}
    .bold {font-weight: bold}
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent implements OnInit {

  constructor(
    @Inject(GAPI_TOKEN) private GAPI:any
  ) { }

  ngOnInit() {
    console.log(this.GAPI.load);
  }
  @Input() event: Event;
  getClassCSS(){
    // if (this.event && this.event.time === '8:00 am'){
    //   return ['green', 'bold']
    // }
    return []
  }
  getStyle() {
    if (this.event && this.event.time === '8:00 am') {
    return { 'color': '#008800', 'font-weight': 'bold'}
    }
    return {}
  }
}

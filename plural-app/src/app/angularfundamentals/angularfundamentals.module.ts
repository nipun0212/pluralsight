import { EventsAppComponent } from './events-app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventsService } from './events/shared/events.service';
import { TostrService } from './common/tostr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EvnetsCreateComponent } from './events/evnets-create/evnets-create.component';
import { Code404Component } from './errors/code404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-details/event-list-resolver.service';
import { UserComponent } from './user/user.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './user/login.component';
import { CreateSessionsComponent } from './events/event-details/create-sessions/create-sessions.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { GAPI_TOKEN } from './shared/gapi.service';

// const routes: Routes = [
//   // {path:'',component:EventsAppComponent},
//   // { path: '', component: EventsAppComponent },
//   { path: '404', component: Code404Component },
//   { path: 'events/new', component: EvnetsCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
//   { path: 'events', component: EventsAppComponent, resolve: { eventsssss:EventListResolverService} },
//   { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
//   { path: 'events/user/profile', component: UserComponent},
//   { path: 'events/user/login', component: LoginComponent },
//   { path: '**', redirectTo: 'events' }
// ];
const routes: Routes = [
  // {path:'',component:EventsAppComponent},
  // { path: '', component: EventsAppComponent },
  { path: '404', component: Code404Component },
  { path: 'events/new', component: EvnetsCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsAppComponent, resolve: { eventsssss: EventListResolverService } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'events/user/profile', component: UserComponent },
  { path: 'events/user/login', component: LoginComponent },
  { path: 'events/new', component: EvnetsCreateComponent },
  { path: 'events/sessions/new', component: CreateSessionsComponent },
  { path: '**', redirectTo: 'events' }
];
let GAPI:any=window['gapi']
@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ],
  providers: [
    EventsService,
    TostrService, 
    EventRouteActivatorService,
    { provide: GAPI_TOKEN, useValue:'GAPI'},
    {
      provide: 'canDeactivateCreateEvent',
      useValue:checkDirty
    },
    EventListResolverService,
    AuthService

  ],
  // exports: [FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent,EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent, EvnetsCreateComponent, Code404Component, UserComponent, CreateSessionsComponent, SessionListComponent, CollapsibleWellComponent, DurationPipe]
})
export class AngularfundamentalsModule {
 }
export function checkDirty(comp:EvnetsCreateComponent) {
  console.log(comp)
  if (comp.isDirty){
    return window.confirm("You have not saved your data");
  }
  return true;
}
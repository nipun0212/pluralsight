import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService:EventsService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const routeExist = this.eventService.getEvent(+route.params['id'])
    if (!routeExist){
      this.router.navigate(['angularfundamentals','404']);
    }
    return true;
    }
}


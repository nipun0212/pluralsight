import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service'
import { EventsService } from '../events/shared/events.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    .pad-left { margin-left: 10px; }
    @media (max-width: 1200px) {#searchForm {display:none}}
  `]
})
export class NavBarComponent implements OnInit {
  searchTerm:string="";
  constructor(private auth:AuthService,private eventService:EventsService) { }

  ngOnInit() {
  }
  searchSession(searchTerm){
    console.log(this.eventService.searchSessions(searchTerm).subscribe(x=>console.log(x)));
  }
}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Session } from '../../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: Session[]
  @Input() filterBy: string;
  @Input() sortBy:string;
  visibleSessions: Session[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.filterSession(this.filterBy)
    this.sortBy==='name'?
    this.visibleSessions.sort(sortByName):this.visibleSessions.sort(sortByVotes)
  }
  filterSession(filter) {
    console.log(filter)
    if (filter!='all') {
      console.log('in filetr')
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() ===filter;
      })
  }
  else{
      this.visibleSessions = this.sessions.slice(0)
  }
  }
}
function sortByName(s1:Session,s2:Session){
  if (s1.name>s2.name) return 1
  else if (s1.name===s2.name) return 0
  else return -1;
}
function sortByVotes(s1: Session, s2: Session) {
  return s2.voters.length-s1.voters.length
}
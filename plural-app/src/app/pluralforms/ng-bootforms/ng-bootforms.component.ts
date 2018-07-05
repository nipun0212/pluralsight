import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-ng-bootforms',
  templateUrl: './ng-bootforms.component.html',
  styleUrls: ['./ng-bootforms.component.css']
})
export class NgBootformsComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };

  // selectToday() {
  //   this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  // }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styles: []
})
export class CollapsibleWellComponent implements OnInit {
  visible:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleContent(){
    console.log("this.visible")
    console.log(this.visible)
    this.visible = !this.visible
  }
}

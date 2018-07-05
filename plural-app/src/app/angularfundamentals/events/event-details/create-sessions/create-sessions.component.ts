import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { Session } from '../../shared/event.model'
import { OutletContext } from '@angular/router';
@Component({
  selector: 'app-create-sessions',
  templateUrl: './create-sessions.component.html',
  styleUrls: ['./create-sessions.component.css']
})
export class CreateSessionsComponent implements OnInit {
  @Output() createNewSession = new EventEmitter()
  @Output() cancelNewSession = new EventEmitter()
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  constructor() { }

  ngOnInit() {

    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400),this.restrictedWord(['foo','bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })

  }
  private restrictedWord(words){
    return (control: FormControl): { [key: string]:any } => {
      if (!words) return null
      var invalidWords = words
      .map(w=>control.value.includes(w)?w:null)
      .filter(w=>w!=null)
      return invalidWords && invalidWords.length > 0?
        'restricted words' : invalidWords.join(', ')
  }
}
  saveSession(fromValues) {
    let session = new Session(
      undefined, fromValues.name, fromValues.presenter, fromValues.duration, fromValues.level, fromValues.abstract, []
    )
    this.createNewSession.emit(session);
  }
}
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { FormPosterService } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plural-forms',
  templateUrl: './plural-forms.component.html',
  styleUrls: ['./plural-forms.component.css']
})
export class PluralFormsComponent implements OnInit {
  languages = ['English', 'Spanish', 'other'];
  hasPrimarylanguageError=false
  model:Employee;

  constructor(private formPoster:FormPosterService) { 
    this.model = new Employee()
    this.model.firstName = '';
    this.model.lastName = 'madan';
    this.model.isFullTime = true;
    this.model.paymentType='w2';
    this.model.primaryLanguage='default';
  }

  ngOnInit() {

  }
  firstNameToUpperCase(value:string):void{
    if(value.length>0)
    this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1);
    else
    this.model.firstName= value;
  }
  validatePrimarylanguage(value){
    if (value == 'default') this.hasPrimarylanguageError=true;
    else this.hasPrimarylanguageError = false
  }

  submitForm(form:NgForm){
    //validate form
    this.validatePrimarylanguage(this.model.primaryLanguage)
    if (this.hasPrimarylanguageError) 
    return


    this.formPoster.postEmployeeForm(this.model).subscribe(
      data=>console.log(data),
      err => console.log("error ",err)
    )
    // console.log(form.value);
  }
}

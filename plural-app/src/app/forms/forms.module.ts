import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModulee } from './forms-routing.module';
import { FormsComponentComponent } from './forms-component/forms-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModulee,
    FormsModule
  ],
  declarations: [FormsComponentComponent]
})
export class PluralForms { }

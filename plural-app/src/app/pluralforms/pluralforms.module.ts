import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PluralformsRoutingModule } from './pluralforms-routing.module';
import { PluralFormsComponent } from './plural-forms/plural-forms.component';
import { FormsModule } from '@angular/forms';
import { FormPosterService } from './services/form-poster.service';
import { NgBootformsComponent } from './ng-bootforms/ng-bootforms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaralGlobalformsComponent } from './plaral-globalforms/plaral-globalforms.component';

@NgModule({
  imports: [
    CommonModule,
    PluralformsRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [PluralFormsComponent, NgBootformsComponent, PlaralGlobalformsComponent],
  providers: [FormPosterService]
})
export class PluralformsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluralFormsComponent } from './plural-forms/plural-forms.component';
import { NgBootformsComponent } from './ng-bootforms/ng-bootforms.component';
import { PlaralGlobalformsComponent } from './plaral-globalforms/plaral-globalforms.component';

const routes: Routes = [

  { path: '', component: PlaralGlobalformsComponent},
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluralformsRoutingModule { }

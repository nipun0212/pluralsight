import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponentComponent } from './forms-component/forms-component.component';

const routes: Routes = [

  {path:'',component:FormsComponentComponent},
  { path: '**', redirectTo:'' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModulee { }

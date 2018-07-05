import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {EventsListComponent} from './angularfundamentals/events/events-list.component';
import {EventsAppComponent} from './angularfundamentals/events-app.component';
const routes: Routes = [
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: 'forms', loadChildren: './pluralforms/pluralforms.module#PluralformsModule'},
  {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
  {path: 'angularfundamentals', loadChildren: './angularfundamentals/angularfundamentals.module#AngularfundamentalsModule'},
  { path: '**', redirectTo: 'contactmanager'}
];
@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

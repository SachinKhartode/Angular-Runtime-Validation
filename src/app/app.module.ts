import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import{ JqueryModule } from 'jquery';
//import { BooststrapModule } from 'bootstrap';

import { AppComponent } from './app.component';
// import { BikeComponent } from './bike/bike.component';
// import { BikeInfoComponent } from './bike-info/bike-info.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, FormsModule, HttpModule,ReactiveFormsModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})

export class AppModule { }

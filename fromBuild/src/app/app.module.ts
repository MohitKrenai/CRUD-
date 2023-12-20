import { NgModule,Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,


  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

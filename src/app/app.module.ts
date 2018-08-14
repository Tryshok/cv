import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.FooterComponent';
import {AgWordCloudModule, AgWordCloudData} from 'angular4-word-cloud';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentAreaComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AgWordCloudModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentAreaComponent,
    FooterComponent]
})
export class AppModule { }

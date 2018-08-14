import { Component } from '@angular/core';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.NavComponent';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.FooterComponent';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salut';
}

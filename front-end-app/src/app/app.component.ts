import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentItemComponent } from './components/content-item/content-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title:string = 'Latest News';
}

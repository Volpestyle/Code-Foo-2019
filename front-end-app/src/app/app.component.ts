import { Component } from '@angular/core';
import { FilterContentService } from './services/filter-content.service';
//declare function activeNav(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  
  constructor(public filterContentService:FilterContentService) {

  }

  title:string = 'Latest News';
}

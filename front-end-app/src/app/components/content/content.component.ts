import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { FilterContentService } from '../../services/filter-content.service';
import {
  trigger,
  query,
  keyframes,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
   trigger('contentOutro', [
      transition(':leave', [
        query('.item', animate('.5s ease-in', keyframes([
            style({opacity: 1}),
            style({opacity: 0}),
          ])), {optional: true})
      ]),
    ]) 
  ]
})
export class ContentComponent implements OnInit {
  
  constructor(private contentService:ContentService, public filterContentService:FilterContentService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(items => {
      this.filterContentService.initContent(items);
    })
  }
}




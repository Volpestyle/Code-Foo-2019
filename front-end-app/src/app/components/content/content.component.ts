import { Component,  HostBinding, OnInit } from '@angular/core';
import { ContentItem } from '../../models/ContentItem';
import { ContentService } from '../../services/content.service';
import { FilterContentService } from '../../services/filter-content.service';
import {
  trigger,
  state,
  query,
  stagger,
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
  
  constructor(private contentService:ContentService, private filterContentService:FilterContentService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(items => {
      this.filterContentService.initContent(items);
    })
  }
}




import { Component, OnInit } from '@angular/core';
import { ContentItem } from '../../models/ContentItem';
import { ContentService } from '../../services/content.service';
import { FilterContentService } from '../../services/filter-content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private contentService:ContentService, private filterContentService:FilterContentService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(items => {
      this.filterContentService.initContent(items);
    })
  }
  
}




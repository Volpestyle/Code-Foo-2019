import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { TimeagoIntl } from 'ngx-timeago';
import { CommentInfo } from '../../models/CommentInfo';
import { ContentItem } from 'src/app/models/ContentItem';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FilterContentService } from 'src/app/services/filter-content.service';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss'],
  animations: [
    trigger('commentIntro', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.7s ease-in', style({ opacity: 1 })),
      ]),
    ]) 
  ]
})
export class ContentItemComponent implements OnInit {
  @Input() item: ContentItem;
  info:CommentInfo;
  live:boolean = true;
  
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getCommentInfo(this.item.contentId).subscribe(data => {
      //console.log(data);
      this.getCommentInfo(data);
    })
  }
  
  getCommentInfo(commentData:any) {
    //Since an array is returned, but we only ask for one id.
    this.info = new CommentInfo().deserialize(commentData.content[0]); 
  }

}

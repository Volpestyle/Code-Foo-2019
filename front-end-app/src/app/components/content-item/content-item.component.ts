import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CommentInfo } from '../../models/CommentInfo';
import { ContentItem } from 'src/app/models/ContentItem';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {
  @Input() item: ContentItem;
  info:CommentInfo;

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

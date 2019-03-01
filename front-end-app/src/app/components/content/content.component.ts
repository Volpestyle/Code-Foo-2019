import { Component, OnInit } from '@angular/core';
import { ContentItem } from '../../models/ContentItem';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contentItems:ContentItem[]; 
  constructor() { }

  ngOnInit() {
    this.contentItems = [
      {
        thumbnails: [{
          url: "",
          size: "large",
          width: 123,
          height: 543,
        }],
        title: "hi",
        slug: "",
        publishDate: new Date("2019-02-15T05:27:00+0000"),
        contentType: "",
        numberOfComments: 5
      }
    ]
  }

}

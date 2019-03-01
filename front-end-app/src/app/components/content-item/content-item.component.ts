import { Component, OnInit, Input } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {
  @Input() item: ContentComponent;
  constructor() { }

  ngOnInit() {

  }

}

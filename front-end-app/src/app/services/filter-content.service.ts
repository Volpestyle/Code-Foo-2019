import { Injectable } from '@angular/core';
import { ContentItem } from '../models/ContentItem';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterContentService {
  contentItems:ContentItem[];
  filteredContent:ContentItem[];
  _filterType:string;

  get filterType():string {
    return this._filterType;
  }
  set filterType(value:string) {
    this._filterType = value;
    this.filteredContent = this.filterContent(value);
    console.log(this.filteredContent);
  }

  constructor() { }

  initContent(items:any) {
    this.contentItems = items.data.map((item:ContentItem) => new ContentItem().deserialize(item));
    this.filteredContent = this.contentItems;
    console.log(this.contentItems);
  }

  filterContent(filterString: string) {
    return this.contentItems.filter(item => 
      item.contentType.indexOf(filterString) !== -1);
  }
}

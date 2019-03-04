import { Injectable } from '@angular/core';
import { ContentItem } from '../models/ContentItem';

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
    this.filteredContent = [];
    var that = this;
    setTimeout( () => { //Let items fade out
      that.filteredContent = that.filterContent(value);
    },500);
  }

  constructor() { }

  initContent(items:any) {
    this.contentItems = items.data.map((item:ContentItem) => new ContentItem().deserialize(item));
    this.filteredContent = this.contentItems.slice();
  }

  filterContent(filterString: string) {
    return this.contentItems.filter(item => 
      item.contentType.indexOf(filterString) !== -1);
  }
}

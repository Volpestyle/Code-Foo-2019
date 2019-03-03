import { Injectable } from '@angular/core';
import { NavItem } from '../models/NavItem';

@Injectable({
  providedIn: 'root'
})
export class NavItemService {
  items:NavItem[];
  constructor() { }

  getItems() {
    this.items = [
      {
        href: "",
        title: "Latest",
        fontAwesome: "far fa-check-circle fa-lg",
        isActive: true,
        filter: "",
      },
      {
        href: "",
        title: "Videos",
        fontAwesome: "fas fa-play fa-lg",
        isActive: false,
        filter: "video",
      },
      {
        href: "",
        title: "Articles",
        fontAwesome: "far fa-file-alt fa-lg",
        isActive: false,
        filter: "article",
      },
    ]
    return this.items;
  }

  resetActive() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].isActive) 
        this.items[i].isActive = false;
    }
  }
}

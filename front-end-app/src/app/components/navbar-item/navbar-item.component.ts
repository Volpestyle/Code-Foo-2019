import { Component, OnInit, Input, Output} from '@angular/core';
import { NavItem } from '../../models/NavItem';
import { NavItemService } from '../../services/nav-item.service';
import { FilterContentService } from 'src/app/services/filter-content.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() navItem: NavItem;
  
  constructor(private navItemService:NavItemService, public filterContentService:FilterContentService) {};

  ngOnInit() {
  };

  setClasses() {
    let classes = {
      "list-group-item": true,
      "active": this.navItem.isActive
    }
    return classes;
  }
  onClick(navItem) {
    this.navItemService.resetActive();
    navItem.isActive = !navItem.isActive;
    this.filterContentService.filterType = navItem.filter;
    //console.log(this.filterContentService.filterType);
  }
}

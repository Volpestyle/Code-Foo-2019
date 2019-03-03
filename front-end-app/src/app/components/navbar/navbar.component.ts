import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NavItem } from '../../models/NavItem';
import { NavItemService } from '../../services/nav-item.service';

@Component({
  selector: 'app-navBar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems:NavItem[];

  constructor(private NavItemService:NavItemService) { }

  ngOnInit() {
    this.navItems = this.NavItemService.getItems();
  }
}

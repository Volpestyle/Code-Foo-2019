import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NavItem } from '../../models/NavItem';

@Component({
  selector: 'app-navBar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems:NavItem[];

  constructor() { }

  ngOnInit() {
    this.navItems = [
      {
        href: "",
        title: "Latest",
        fontAwesome: "far fa-check-circle fa-lg"
      },
      {
        href: "",
        title: "Videos",
        fontAwesome: "fas fa-play fa-lg"
      },
      {
        href: "",
        title: "Articles",
        fontAwesome: "far fa-file-alt fa-lg"
      },
    ]
  }

}

import { Component, OnInit, Input} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() navItem: NavbarComponent;
  
  constructor() {};

  ngOnInit() {};
}

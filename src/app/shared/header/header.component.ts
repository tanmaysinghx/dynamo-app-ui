import { Component } from '@angular/core';
import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  loggedInUser: any;

  constructor() {}

  ngOnInit() {
    initTE({ Collapse, Dropdown });
    this.getSessionData();
  }

  getSessionData() {
    this.loggedInUser = sessionStorage.getItem("display-name");
  }
}

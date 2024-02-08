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
  
  constructor() {}

  ngOnInit() {
    initTE({ Collapse, Dropdown });
  }
}

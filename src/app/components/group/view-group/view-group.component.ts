import { Component } from '@angular/core';
import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.scss']
})
export class ViewGroupComponent {

  constructor() {}

  ngOnInit() {
    initTE({ Ripple, Input });
  }
}

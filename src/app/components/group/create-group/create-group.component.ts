import { Component } from '@angular/core';
import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent {

  constructor() {}

  ngOnInit() {
    initTE({ Ripple, Input });
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  Stepper,
  initTE,
  Ripple,
  Input,
  Popconfirm
} from "tw-elements";

@Component({
  selector: 'app-onboarding-screen',
  templateUrl: './onboarding-screen.component.html',
  styleUrls: ['./onboarding-screen.component.scss']
})
export class OnboardingScreenComponent {

  constructor() { }

  ngOnInit() {
    initTE({ Stepper, Ripple, Input, Popconfirm });
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    initTE({ Stepper, Ripple, Input, Popconfirm });
    this.checkOnboardingStatus();
  }

  checkOnboardingStatus() {
    let onBoardingFlag = sessionStorage.getItem("onboarding-flag");
    if (onBoardingFlag == "true") {
      this.router.navigate(['/dashboard']);
    }
  }

  acceptAndContinue() {
    this.router.navigate(['../dashboard']);
  }

}

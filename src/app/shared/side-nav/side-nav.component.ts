import { Component } from '@angular/core';
import {
  Sidenav,
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  sideNavFlag: boolean = false;
  onboardingFlag: boolean = false;

  constructor() { }

  ngOnInit() {
    initTE({ Sidenav, Ripple });
    this.toggleSideNav();
    let flag = localStorage.getItem("onboarding-flag");
    if (flag == "false") {
      this.onboardingFlag = false;
    } else if (flag == "true") {
      this.onboardingFlag = true;
    }
  }

  toggleSideNav() {
    const sideNavElement = document.querySelector('.side-nav');
    if (!this.sideNavFlag && sideNavElement) {
      sideNavElement.setAttribute('data-te-sidenav-hidden', 'false');
      this.sideNavFlag = true;
    } else if (this.sideNavFlag && sideNavElement) {
      sideNavElement.setAttribute('data-te-sidenav-hidden', 'true');
      this.sideNavFlag = false;
    }
  }
}

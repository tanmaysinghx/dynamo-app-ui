import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.scss']
})
export class BreadcrumpComponent {

  sectionArray: any = [];
  sectionArrayLastElement: any;
  onboardingFlag: boolean = false;

  constructor() { }

  ngOnInit() {
    this.getCurrentURL();
    let flag = sessionStorage.getItem("onboarding-flag");
    if (flag == "false") {
      this.onboardingFlag = false;
    } else if (flag == "true") {
      this.onboardingFlag = true;
    }
  }

  getCurrentURL() {
    const currentUrl = window.location.href;
    const urlSegments = currentUrl.split('/');
    this.sectionArray.push("Dashboard");
    for (let i = 0; i < urlSegments.length; i++) {
      if (i != 0 && i != 1 && i != 2 && i != urlSegments.length - 1) {
        this.sectionArray.push(this.toTitleCase(urlSegments[i]));
      } else if (i == urlSegments.length - 1) {
        this.sectionArrayLastElement = this.toTitleCase(urlSegments[urlSegments.length - 1]);
      }
    }
  }

  toTitleCase(inputString: any) {
    return inputString
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}

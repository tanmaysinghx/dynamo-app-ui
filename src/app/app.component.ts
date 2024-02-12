import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamo-app-ui';

  onboardingFlag: any  = "NO";

  constructor() {}

  ngOnInit() {
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    this.onboardingFlag = localStorage.getItem("onboardingFlag");
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamo-app-ui';

  onboardingFlag: any  = "NO";
  jwtToken: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getLocalStorageData();
    this.setLocalStorage();
  }

  setLocalStorage() {
    // at the moment setting static, will change flag depending on api output
    localStorage.setItem("onboarding-flag", "true");
  }

  getLocalStorageData() {
    this.onboardingFlag = localStorage.getItem("onboardingFlag");
  }
}

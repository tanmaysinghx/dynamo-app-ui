import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamo-app-ui';

  jwtToken: any;
  userName: any;
  displayName: any;
  authData: any;

  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.mainService.getUserDataFromAuth().subscribe((data) => {
      this.authData = data;
      this.userName = data.username;
      this.displayName = data.firstName + " " + data.lastName;
      this.setLocalStorage();
      this.checkDataSyncStatus(this.userName);
    })
  }

  checkDataSyncStatus(userName: any) {
    this.mainService.getDBSyncStatus(userName).subscribe((data) => {
      if (!data) {
        localStorage.setItem("onboarding-flag", "false");
      } else if (data) {
        localStorage.setItem("onboarding-flag", "true");
      }
    })
  }

  setLocalStorage() {
    localStorage.setItem("user-name", this.userName);
    localStorage.setItem("display-name", this.displayName);
  }
}

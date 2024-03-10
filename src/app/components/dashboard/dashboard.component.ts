import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  jwtToken: any;
  authData: any;
  userName: any;
  displayName: any;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router,
  ) { }

  ngOnInit() {
    let username = sessionStorage?.getItem("userName");
    if (!username) {
      this.getDataFromURL();
      this.getUserData();
    }
  }

  getDataFromURL() {
    this.jwtToken = this.route.snapshot.params['jwt-token'];
    localStorage.setItem("jwt-token", this.jwtToken);
  }

  getUserData() {
    this.dashboardService.getUserDataFromAuth(this.jwtToken).subscribe((data) => {
      this.authData = data;
      this.userName = data.username;
      this.displayName = data.firstName + " " + data.lastName;
      this.setLocalStorage();
      this.setSessionStorage();
      this.checkDataSyncStatus(this.userName);
    })
  }

  checkDataSyncStatus(userName: any) {
    this.dashboardService.getDBSyncStatus(userName).subscribe((data) => {
      if (!data) {
        sessionStorage.setItem("onboarding-flag", "false");
        this.router.navigate(['/onboarding-screen']);
      } else if (data) {
        sessionStorage.setItem("onboarding-flag", "true");
      }
    })
  }

  setSessionStorage() {
    sessionStorage.setItem("userName", this.userName);
    sessionStorage.setItem("display-name", this.displayName);
    sessionStorage.setItem("auth-data", this.authData);
  }

  setLocalStorage() {
    localStorage.setItem("jwt-token", this.jwtToken);
  }

}

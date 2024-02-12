import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  jwtToken: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getDataFromURL();
  }

  getDataFromURL() {
    this.jwtToken = this.route.snapshot.params['jwt-token'];
    localStorage.setItem("jwt-token", this.jwtToken);
  }

}

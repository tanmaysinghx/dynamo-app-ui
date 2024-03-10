import { Component } from '@angular/core';

interface SpeedDialAction {
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-speed-up-dial',
  templateUrl: './speed-up-dial.component.html',
  styleUrls: ['./speed-up-dial.component.scss']
})
export class SpeedUpDialComponent {

  onboardingFlag: any;

  actions: SpeedDialAction[] = [
    { icon: 'fas fa-home', active: false },
    { icon: 'fas fa-envelope', active: false },
    { icon: 'fas fa-bell', active: false },
    { icon: 'fas fa-bell', active: false },
  ];

  toggleAction(action: SpeedDialAction): void {
    action.active = !action.active;
  }

  ngOnInit() {
    let flag = sessionStorage.getItem("onboarding-flag");
    if (flag == "false") {
      this.onboardingFlag = false;
    } else if (flag == "true") {
      this.onboardingFlag = true;
    }
  }
}

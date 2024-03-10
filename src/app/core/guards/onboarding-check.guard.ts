import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingCheckGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const onboardingFlag = sessionStorage.getItem("onboarding-flag");
    console.log(onboardingFlag)
    if (onboardingFlag == "true") {
      return true;
    } else if (onboardingFlag == "false") {
      this.router.navigate(['/onboarding-screen']);
      return false;
    } else {
      return false;
    }
    //return true;
  }

}

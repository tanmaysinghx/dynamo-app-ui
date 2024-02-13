import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingScreenComponent } from './components/onboarding-screen/onboarding-screen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OnboardingCheckGuard } from './core/guards/onboarding-check.guard';
import { CreateGroupComponent } from './components/group/create-group/create-group.component';

const routes: Routes = [
  { path: 'onboarding-screen', component: OnboardingScreenComponent },
  { path: 'dashboard/:jwt-token', component: DashboardComponent, canActivate: [OnboardingCheckGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [OnboardingCheckGuard] },
  { path: 'create-group', component: CreateGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

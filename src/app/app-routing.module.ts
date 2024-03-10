import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingScreenComponent } from './components/onboarding-screen/onboarding-screen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OnboardingCheckGuard } from './core/guards/onboarding-check.guard';
import { CreateGroupComponent } from './components/group/create-group/create-group.component';
import { ViewGroupComponent } from './components/group/view-group/view-group.component';

const routes: Routes = [
  { path: 'onboarding-screen', component: OnboardingScreenComponent },
  { path: 'dashboard/:jwt-token', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-group', component: CreateGroupComponent },
  { path: 'view-group', component: ViewGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

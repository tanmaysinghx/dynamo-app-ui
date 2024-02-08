import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingScreenComponent } from './components/onboarding-screen/onboarding-screen.component';

const routes: Routes = [
  { path: 'onboarding-screen', component: OnboardingScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

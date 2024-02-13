import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpeedUpDialComponent } from './shared/speed-up-dial/speed-up-dial.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { OnboardingScreenComponent } from './components/onboarding-screen/onboarding-screen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateGroupComponent } from './components/group/create-group/create-group.component';
import { EditGroupComponent } from './components/group/edit-group/edit-group.component';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';
import { EditTeamComponent } from './components/team/edit-team/edit-team.component';
import { ViewTeamComponent } from './components/team/view-team/view-team.component';
import { ViewGroupComponent } from './components/group/view-group/view-group.component';
import { OnboardingCheckGuard } from './core/guards/onboarding-check.guard';
import { BreadcrumpComponent } from './shared/breadcrump/breadcrump.component';
import { PageInfoComponent } from './shared/page-info/page-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpeedUpDialComponent,
    SideNavComponent,
    LoginComponent,
    OnboardingScreenComponent,
    DashboardComponent,
    CreateGroupComponent,
    EditGroupComponent,
    CreateTeamComponent,
    EditTeamComponent,
    ViewTeamComponent,
    ViewGroupComponent,
    BreadcrumpComponent,
    PageInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OnboardingCheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

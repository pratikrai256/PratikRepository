import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserComponent } from './user/user.component';
import { UnauthGuard } from './Guard/unauth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes=[
  {path:"",redirectTo:"registration",pathMatch:"full"},
  {path:"user",component:UserComponent},
  {path:"about",component:AboutComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

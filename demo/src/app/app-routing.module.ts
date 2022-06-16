import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserComponent } from './user/user.component';
import { UnauthGuard } from './Guard/unauth.guard';

const routes:Routes=[
  {path:"",redirectTo:"registration",pathMatch:"full"},
  {path:"user",component:UserComponent},
  {path:"login",component:LoginComponent,canDeactivate:[UnauthGuard]},
  {path:"about",component:AboutComponent,canActivate:[AuthGuard]},
  {path:"registration",component:RegistrationComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

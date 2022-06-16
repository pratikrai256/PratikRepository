import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';


const routes:Routes=[
  {path:"",redirectTo:"users",pathMatch:"full"},
  {path:"users",component:UsersComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

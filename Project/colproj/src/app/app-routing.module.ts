import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EntersampleComponent } from './entersample/entersample.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { AuthGuard } from './Guard/auth.guard';
import { HeamatologyComponent } from './heamatology/heamatology.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';
const routes: Routes = [
  {path: '',redirectTo:"landingpage",pathMatch:"full"},
  {path: 'landingpage',component:HomeComponent},
  {path:"register",component:RegisterComponent,canActivate:[AuthGuard]},
  {path:"entersample/:id",component:EntersampleComponent},
  {path:"login",component:UserloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"heamatology",component:HeamatologyComponent},
  {path:"glucometry",component:GlucometryComponent},
  {path:"thyroid",component:ThyroidComponent},
  {path:"userpage",component:UserpageComponent},
  {path:"adminpage",component:AdminpageComponent,canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

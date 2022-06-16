import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EntersampleComponent } from './entersample/entersample.component';
import { HeamatologyComponent } from './heamatology/heamatology.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './Guard/auth.guard';
import { InterceptorInterceptor } from './Interceptor/interceptor.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    UserloginComponent,
    AdminloginComponent,
    EntersampleComponent,
    HeamatologyComponent,
    GlucometryComponent,
    ThyroidComponent,
    HomeComponent,
    AdminpageComponent,
    UserpageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor,
  multi:true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

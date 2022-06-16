import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private authservice:AuthService){}
  constructor(private passData:AuthService){}
  canActivate(){
    if(this.passData.verify()){
      return true
    }else{
      window.alert("invalid data")
      return false
    }
    // if(this.authservice.isLoggedin()){
    //   return true
    // }else{
    //   window.alert("You need to login to visit this page")
    //   return false
    // }
  }
  }

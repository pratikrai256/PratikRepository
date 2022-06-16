import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService){}
  canActivate(){
    if(this.authservice.isLoggedin()){
      return true
    }else{
      window.alert("You need to login to visit this page")
      return false
    }
  }
  }

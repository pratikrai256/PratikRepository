import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLoggedin(){
  //   //Bussiness Logic
  //   return false
  // }
  regEmail=localStorage.getItem("regEmail")
  regPass=localStorage.getItem("regPass")
  logEmail=localStorage.getItem("logEmail")
  logPass=localStorage.getItem("logPass")
  verify(){
    if(this.regEmail===this.logEmail && 
      this.regPass===this.logPass){
        return true
      } else{
        return false
      }
  }

  constructor() { }
}

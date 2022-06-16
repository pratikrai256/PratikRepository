import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin(){
    //Bussiness Logic
    return false
  }

  constructor() { }
}

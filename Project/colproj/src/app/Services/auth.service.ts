import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }


  //Add Ht data
  addHtData(htData:any){
    return this.http.post("http://localhost:4000/test/addhtreport",htData,{

    })
  }

  //Add gluco data
  addglData(glData:any){
    return this.http.post("http://localhost:4000/test/addglreport",glData)
  }

  //Add thyroid data
  addthData(thData:any){
    return this.http.post("http://localhost:4000/test/addthyreport",thData)
  }

   //Fetch Ht data
   getHtData(email:any){
    return this.http.post("http://localhost:4000/test/viewrepo",email)
  }

  //Fetch gluco data
  getglData(email:any){
    return this.http.post("http://localhost:4000/test/viewglrepo",email)
  }

  //Fetch thyroid data
  getthData(email:any){
    return this.http.post("http://localhost:4000/test/viewthrepo",email)
  }

  //fetch data
  fetchData(){
    return this.http.get<any>("http://localhost:4000/users/users")
  }

  //fetch names
  fetchNames(){
    return this.http.get("http://localhost:4000/users/users")
  }

  //fetch data
  getData(login:any){
    return this.http.post("http://localhost:4000/users/login",login)
  }


  //add Data
  addData(register:any){
    return this.http.post("http://localhost:4000/users/register",register)
  }

  getToken(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
  getAdmin(){
    if(localStorage.getItem("role")==='admin'){
      return true
    }else{
      return false
    }
  }
  getTokens(){
    return localStorage.getItem("token")
  }
}

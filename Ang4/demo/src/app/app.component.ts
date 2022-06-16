import { Component, OnInit } from '@angular/core';
// import { City } from './city';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // city: City[] = [];
  // cSelected!:Number;
ngOnInit(): void {
//    this.city=[
//      {id:1,Name:"Bangalore"},
//      {id:2,Name:"Kolkata"},
//      {id:3,Name:"Mumbai"},
//      {id:4,Name:"Rajasthan"},
//      {id:5,Name:"Patna"}

//    ]; 
//    this.cSelected=4;
// }
}
  title = 'demo';
  flag=false
  toggleUser(){
    this.flag=!this.flag
  }
}

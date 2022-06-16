import { Component } from '@angular/core';
import { createPublicKey } from 'crypto';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users=[
    {name:"Virat",age:40},
    {name:"Pratik",age:41},
    {name:"Akshay",age:42},
    {name:"Divyanshu",age:43}
]
selectedCountry='ind';
  public Change:any="Change"
  title = 'childtoparent';
  flag:boolean=false
 
  toggle(){
    this.flag=!this.flag;
    if(this.flag)
    this.Change="Hide"
    else
    this.Change="Show"
  }
}

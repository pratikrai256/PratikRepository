import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
newId:any
result:any

generateId(){
  var myNum=Math.round(Math.random()*100)
  var myStr="TY"
  var myStr1="DEV"
  var final=""
  for(let i =0; i<3;i++){
final+=this.result[i]
  }
  this.newId=`${myStr}${final}${myStr1}${myNum}`
}
  constructor() { }

  ngOnInit(): void {
  }

}

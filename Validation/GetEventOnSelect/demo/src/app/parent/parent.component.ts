import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // FOR PARENT TO CHILD
  // name="Pratik Rai"
  // FOR CHILD TO PARENT
  // result!: string;
  // getData(value:any){
  //   this.result=value;
  // }
  // content projection
  SalesProducts=[
    {name:"mobile",price:12000}, 
    {name:"mobile",price:12000},
    {name:"mobile",price:12000},
    {name:"mobile",price:12000},
    {name:"mobile",price:12000},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

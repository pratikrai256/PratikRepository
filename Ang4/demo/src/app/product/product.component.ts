import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  user=[
    {name:'Shubham',city:'Bihar',id:101,sal:15000,dob:new Date('24 Jan 2000')},
    {name:'Pratik',city:'Pune',id:102,sal:20000,dob:new Date('25 Mar 2001')},
    {name:'Divyanshu',city:'Jharkhand',id:103,sal:18000,dob:new Date('26 Apr 2003')},
    {name:'Akshay',city:'Maharashtra',id:104,sal:35000,dob:new Date('27 May 2002')},
    {name:'Abhishek',city:'Delhi',id:105,sal:25000,dob:new Date('28 Feb 2001')}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  result:any=[];
  newValue:any=[];
  flag:boolean=false
  constructor(private users:ServiceService) {}

  ngOnInit():void {
    this.users.getData().subscribe(data=>{
      this.result=data
  
})
  }
  showData(){
    this.flag=true;
    this.newValue=[];
    this.result.filter((val:any)=>{
      if(val.completed===true){
        this.newValue.push(val)
      }
    });
    console.log(this.newValue);
    
  }
  showDatas(){
    this.flag=true;
    this.newValue=[];
    this.result.filter((val:any)=>{
      if(val.completed===false){
        this.newValue.push(val)
      }
    })
  }
  }



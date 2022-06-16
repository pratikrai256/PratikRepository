import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  constructor(private service: AuthService) { }
  @Output() message:EventEmitter<any> = new EventEmitter<any>();

passData:any
result:any=[]
data:any
details:any=[]
detail:any=[]
detailss:any=[]

  


  hemo(myEmail:any){
    this.service.getHtData({email:myEmail}).subscribe((val:any)=>{
      console.log(val);
      if (!val.error) {
        this.detail=val.data
      console.log(this.detail);
        
      }else{
        this.detail=[]
      }

      
      
    })
    console.log(myEmail);
    

  }
  thy(myEmail:any){
    this.service.getthData({email:myEmail}).subscribe((val:any)=>{
      console.log(val);

      if (!val.error) {
        this.details=val.data
      console.log(this.details);
        
      }else{
        this.details=[]
      }
    })
    console.log(myEmail);
    

  }
  gluco(myEmail:any){
    this.service.getglData({email:myEmail}).subscribe((val:any)=>{
      console.log(val);

      if (!val.error) {
        this.detailss=val.data
      console.log(this.detailss);
        
      }else{
        this.detailss=[]
      }

      
      
    })
    console.log(myEmail);
    

  }
 
  

  ngOnInit(): void {
    this.service.fetchData().subscribe((val)=>{
      console.log(val);
      this.result=val
      this.result=this.result.data
      console.log(this.result);
      
    })
  }

}

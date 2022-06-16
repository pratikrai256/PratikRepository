import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-heamatology',
  templateUrl: './heamatology.component.html',
  styleUrls: ['./heamatology.component.css']
})
export class HeamatologyComponent implements OnInit {
result:any
  constructor(private router: Router ,private route:ActivatedRoute,private service:AuthService) { }
  dta1:any = {};
  glucodata:any
  id:any


  heamSubmit(form:NgForm){

    console.log(form.value);
console.log(  
  this.route.snapshot.queryParams);

    this.service.addHtData(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['adminpage'])

      
    })
    console.log(form.value);
    
      
  }
      

  data:any
  
  ngOnInit() {
   console.log( this.route.snapshot.params);
   

    
    this.route.queryParams.subscribe((val)=>{
      console.log(val)
      this.data=val
      let data= JSON.parse(this.data.data)
this.id=data._id
console.log(this.id,"id");
   
 
    })

  }

}

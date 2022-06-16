import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-thyroid',
  templateUrl: './thyroid.component.html',
  styleUrls: ['./thyroid.component.css']
})
export class ThyroidComponent implements OnInit {
  constructor(private router:Router , private route:ActivatedRoute,private service:AuthService) { }

id:any
thydata:any;
  thySubmit(form:NgForm){
    console.log(form.value);
    console.log(  
      this.route.snapshot.queryParams);
this.service.addthData(form.value).subscribe((res)=>{
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

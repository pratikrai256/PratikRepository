import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-entersample',
  templateUrl: './entersample.component.html',
  styleUrls: ['./entersample.component.css']
})
export class EntersampleComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute,private service:AuthService) { }
  entForm=new FormGroup({
    heamo:new FormControl(""),
    gluco:new FormControl(""),
    thy:new FormControl(""),

  })

  SID:any;

  enterForm(){
    
    let {heamo,gluco,thy} = this.entForm.value
    console.log(this.entForm.value);
    if (heamo) {
      this.router.navigate(["heamatology"],{queryParams:{data:JSON.stringify({_id:this.SID,data:this.entForm.value})}})
      
    }else if(gluco){
      this.router.navigate(["glucometry"],{queryParams:{data:JSON.stringify({_id:this.SID,data:this.entForm.value})}})
    }else{
      this.router.navigate(["thyroid"],{queryParams:{data:JSON.stringify({_id:this.SID,data:this.entForm.value})}})
    }

  }
names:any;
ResData:any;
selectedData:any=[]
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.SID = this.route.snapshot.params['id']

    this.service.fetchData().subscribe((res)=>{
      console.log(res);
     this.ResData = res.data;
     console.log(this.ResData);
     for(let data of this.ResData){
      if(data._id === this.SID){
        this.selectedData = data
        console.log(this.selectedData);
        

      }
    }
     
    })
    

    
    this.service.fetchNames().subscribe((name)=>{
      this.names = name;
      this.names=this.names.data;
      
      
    });
  }

}

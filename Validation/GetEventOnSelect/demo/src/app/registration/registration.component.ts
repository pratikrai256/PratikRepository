import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm=new FormGroup({
uemail:new FormControl("",Validators.required),
upass:new FormControl("",Validators.required)
  })
  get uemail(){
    return this.registrationForm.get("uemail")
  }
  get upass(){
    return this.registrationForm.get("upass")
  }
  registration(){
    console.log(this.registrationForm.value);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}

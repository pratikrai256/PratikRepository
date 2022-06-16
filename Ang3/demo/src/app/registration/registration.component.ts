import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  regForm=new FormGroup({
    uemail:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),  
    upass:new FormControl ('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),  
    uCpass:new FormControl ('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),  

  })
  get uemail(){
    return this.regForm.get('uemail')
  }
  get upass(){
    return this.regForm.get('upass')
    
  }
  get uCpass(){
    return this.regForm.get('uCpass')
  }
  reg(){
    console.log(this.regForm.value);
    localStorage.setItem("regEmail",this.uemail?.value)
    localStorage.setItem("regPass",this.upass?.value)
    localStorage.setItem("regCpass",this.uCpass?.value)
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}

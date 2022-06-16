import { Component} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  val:any = "password";
  eye:any = "fas fa-eye-slash"

  toggle(){
    if (this.val==="password") {
      this.val="text"
      this.eye="fas fa-eye"
      
    }else {
      this.val="password"
      this.eye="fas fa-eye-slash"
    }
  }

  constructor(private service:AuthService,private router:Router) { }

  regForm=new FormGroup({
    email:new FormControl('', [Validators.required]),  
    password:new FormControl ('', [Validators.required]), 
    fname:new FormControl ('', [Validators.required]),
    lname:new FormControl ('', [Validators.required]),
    role:new FormControl ('', [Validators.required])

  })
  get email(){
    return this.regForm.get('email')
  }
  get password(){
    return this.regForm.get('password')
    
  }
  get fname(){
    return this.regForm.get('fname')
  }
  get role(){
    return this.regForm.get('role')
  }
  userReg(){
    console.log(this.regForm.value);
    this.service.addData(this.regForm.value).subscribe((res)=>{
      console.log(res);
    
  })

}
}

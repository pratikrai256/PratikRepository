import { Component} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent  {
  result:any

  constructor(private service:AuthService, private router:Router) { }


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

  regForm=new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),  
    password:new FormControl ('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')])
  })
  get email(){
    return this.regForm.get('email')
  }
  get password(){
    return this.regForm.get('password')
    
  }
  adminlogin(){
    console.log(this.regForm.value);
    this.service.getData(this.regForm.value).subscribe((data) => {
      
      this.result = data;
      console.log(data);
      // if(this.result.data.role==='admin'){
      //   this.router.navigate(['adminpage'])
      // }else{
      //   this.router.navigate(['userpage'])
      // }
     
    

  })
}
}


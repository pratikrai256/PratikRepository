import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  fname:FormControl=new FormControl
  onSubmit(form:NgForm){
  console.log(form.value);
}
  

  constructor() { }

  ngOnInit(): void {
  }
}

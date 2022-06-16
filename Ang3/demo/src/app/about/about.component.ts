import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fname:FormControl=new FormControl
  onSubmit(form:NgForm){
  console.log(form.value);
  localStorage.setItem("First Name",form.value.fname)
  localStorage.setItem("Last Name",form.value.lname)
}
  

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login(data:NgForm){
    console.log(data);
    console.log(data.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

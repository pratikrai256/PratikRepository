import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  values:any
  constructor(private user:UserServiceService) { }
  ngOnInit(): void {
    this.values=this.user.getData()
  }

}

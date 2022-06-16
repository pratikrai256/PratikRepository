import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  result:any
  constructor(private users:UserService) { }

  ngOnInit(): void {
    this.users.getData().subscribe(data=>{
      this.result=data
    })
  }

}

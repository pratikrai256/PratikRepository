import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  result:any

  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.users.getData().subscribe(data=>{
      this.result=data
    })
  }

}

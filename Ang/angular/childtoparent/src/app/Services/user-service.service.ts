import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

getData(){
  return [
    {name:"Pratik",department:"Developement",ID:101},
    {name:"Aman",department:"Developement",ID:102},
    {name:"Abhishek",department:"Developement",ID:103},
    {name:"KD Virus",department:"Developement",ID:104},
    {name:"Divyanshu",department:"Developement",ID:105}
  ]
}
  constructor() { }
}

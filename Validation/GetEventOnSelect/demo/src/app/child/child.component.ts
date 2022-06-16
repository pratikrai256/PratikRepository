import { Component, Input, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // FOR PARENT TO CHILD
  // @Input() uname: any
  // FOR CHILD TO PARENT
//   @Output() message:EventEmitter<string>=new EventEmitter<string>()
//   passData(){
// this.message.emit("This Data has come from Child Component")
//   }
// CONTENT PROJECTION
@Input() products:any

  constructor() { }

  ngOnInit(): void {
  }

}

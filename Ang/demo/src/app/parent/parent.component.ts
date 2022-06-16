import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


val1='showing result'
  val2='getting result'
  constructor() { }

  ngOnInit(): void {
  }

}

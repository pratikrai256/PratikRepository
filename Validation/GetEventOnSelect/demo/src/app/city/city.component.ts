import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  selectedCity:string='';
  City:any=[
    "Bangalore",
    "Patna",
    "Delhi",
    "Kolkata",
    "Pune"
  ];
  radioChangeHandler(event:any){
    this.selectedCity=event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

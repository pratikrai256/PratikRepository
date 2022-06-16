import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {
  constructor(private product:ProductsService) { }

  addProduct(form:NgForm){
console.log(form.value);
this.product.addData(form.value).subscribe((res)=>{
  console.log(res);
  
})

  }

  ngOnInit(): void {
  }

}

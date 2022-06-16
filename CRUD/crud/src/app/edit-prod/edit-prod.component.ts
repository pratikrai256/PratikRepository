import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.css']
})
export class EditProdComponent implements OnInit {
result:any
selectedProd:any

editProduct(form:NgForm){
  console.log(form.value);      
this.product.updateData(this.selectedProd._id,form.value).subscribe((res)=>{
  console.log(res);
  
})
}
  constructor(private route:ActivatedRoute, private product:ProductsService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    console.log(id);
    this.product.getData().subscribe((data) => {
this.result = data
console.log(this.result.products);


    for(let r of this.result.products) {
      if(r._id === id) {
        this.selectedProd=r
        console.log(this.selectedProd);
        
      }
    }
  })
    
  }

}

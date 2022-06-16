import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';


@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  constructor(private product:ProductsService) { }
result:any;
  ngOnInit(): void {
    this.product.getData().subscribe((data) => {
      
      this.result = data;
      console.log(data);
      
    })
  }

  deleteProduct(_id:any) {
    this.product.deleteData(_id).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}

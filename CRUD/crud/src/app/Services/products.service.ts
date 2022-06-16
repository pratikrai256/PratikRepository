import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  //fetch data
  getData(){
    return this.http.get("https://ty-shop.herokuapp.com/api/products")
  }

  //add Data
  addData(product:any){
    return this.http.post("https://ty-shop.herokuapp.com/api/products",product)
  }
//update data
updateData(_id:any,product: any){
  return this.http.put(`https://ty-shop.herokuapp.com/api/products/${_id}`,product)

}
  //delete product  
deleteData(_id:any){
  return this.http.delete(`https://ty-shop.herokuapp.com/api/products/${_id}`)
}
 
}

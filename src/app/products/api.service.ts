import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchkey=new BehaviorSubject('');   // BehaviorSubject -it is used to share stream of data 
  constructor(private http:HttpClient) { }  //http is used to access the httpclientmodule This id dependancy injection


  //get products
  getProducts(){
    return this.http.get('http://localhost:3000/all-products')   //this keyword is used to denote http  and we give the path inside get 
  }


  //add to wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      description:product.description
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
  }

  //get  wishlist
getwishlist(){
  return this.http.get('http://localhost:3000/getwishlist') 
}

deletefromwish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/'+id) 

}
}


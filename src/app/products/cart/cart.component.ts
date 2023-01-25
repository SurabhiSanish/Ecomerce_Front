import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:any=[]
  grand:any;
  updatetotal:any
  constructor(private cart:CartService , private router:Router) { }

 

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data;
      }
    )
    this.grand=this.cart.gettotal()

  }
  removeitem(product:any){
    this.cart.removecart(product)
    this.grand=this.cart.gettotal()

  }
  
  removeall(){
    this.cart.removeall()

  }

 discount3per(){
  let discount=(this.grand*3)/100
  this.updatetotal=this.grand.discount
 }
 discount10per(){
  
 }

 discount30per(){
  
 }

 discount50per(){
  
 }
  

 proceed(){
  alert("your order is placed")
  this.router.navigateByUrl('')
  this.removeall()
 }




}

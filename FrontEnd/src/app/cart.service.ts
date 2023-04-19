import { Injectable } from '@angular/core';
import { coffee } from './models/coffee';
import { cartItem } from './models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: cartItem[] = [];
  cartPrice=0.00
  numberOfItems = 0;
  constructor(){}
  
    addToCart(product: coffee) {
      let added=false;
      for(let item of this.items){
        if(item.item.upc == product.upc){
          item.numberItems++;
          item.priceTotal+=product.price
          added=true
        }
        
      }
      if(!added){
        this.items.push({item:product,numberItems:1,priceTotal:product.price})
      }
      console.log(this.items)
      
      this.numberOfItems++;
      this.cartPrice+=product.price
    }
 
    getItems() {
      return this.items;
    }
    // changeItemQty(item:cart){

    // }
  clearItem(item:cartItem){
    const index = this.items.indexOf(item);
    this.numberOfItems = this.numberOfItems -  item.numberItems;
    this.cartPrice = this.cartPrice - item.priceTotal
if (index > -1) { 
  this.items.splice(index,1); 
}
  }
    clearCart() {
      this.numberOfItems=0;
      this.items = [];
      return this.items;
    }
}

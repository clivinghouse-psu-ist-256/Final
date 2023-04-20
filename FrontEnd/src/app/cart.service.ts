import { Injectable } from '@angular/core';
import { coffee } from './models/coffee';
import { cartItem } from './models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartFromStorage = JSON.parse(localStorage.getItem('cart')!) as cartItem[]
  items: cartItem[] = [];
  cartPrice=0.00
  numberOfItems = 0;
  constructor(){
    this.cartFromStorage? this.items=this.cartFromStorage: ""
    for(let item of this.items){
      this.cartPrice+=item.priceTotal
      this.numberOfItems+= item.numberItems
    }
    this.cartPrice=Number(this.cartPrice.toFixed(2));
  }
  
    addToCart(product: coffee) {
      let added=false;
      for(let item of this.items){
        if(item.item.upc == product.upc){
          item.numberItems++;
          item.priceTotal+=Number(product.price.toFixed(2))
          added=true
        }
        
      }
      if(!added){
        this.items.push({item:product,numberItems:1,priceTotal:product.price})
      }
      console.log(this.items)
      
      this.numberOfItems++;
      this.cartPrice+=Number(product.price.toFixed(2))  
      this.saveLocalStorage()
    }
 
    getItems() {
      return this.items;
      this.saveLocalStorage()
    }
    // changeItemQty(item:cart){

    // }
  clearItem(item:cartItem){
    const index = this.items.indexOf(item);
    this.numberOfItems = this.numberOfItems -  item.numberItems;
    this.cartPrice = Number((this.cartPrice - item.priceTotal).toFixed(2))
    if (index > -1) { 
     this.items.splice(index,1); 
    }
this.saveLocalStorage();
}


    clearCart() {
      this.numberOfItems=0;
      this.items = [];
      this.saveLocalStorage()
      this.cartPrice =0.00
     this.saveLocalStorage()
      
    }

saveLocalStorage(){
  localStorage.clear()
  localStorage.setItem('cart',JSON.stringify(this.items))
}
}

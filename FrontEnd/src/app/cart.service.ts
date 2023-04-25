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
  taxRate = .06
  tax = 0;
  constructor(){
    this.cartFromStorage? this.items=this.cartFromStorage: ""
    for(let item of this.items){
      this.cartPrice+=item.priceTotal
      this.numberOfItems+= item.numberItems
      this.tax = Number((this.cartPrice*this.taxRate).toFixed(2))

    }
    this.cartPrice=Number(this.cartPrice.toFixed(2));
  }
 
  modifyCount(cartI:cartItem, adjValue:number){
    for(let item of this.items){
      if(cartI.item.upc == item.item.upc){

        item.numberItems = adjValue;
        cartI.priceTotal = Number((adjValue*cartI.item.price).toFixed(2));
        
      }
      this.cartPrice = 0;
      for(let item of this.items){
        this.cartPrice = this.cartPrice+item.priceTotal;
      }
      this.cartPrice = Number(this.cartPrice.toFixed(2))
    }
    this.saveLocalStorage();
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
      this.saveLocalStorage()

      return this.items;
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
      this.tax = 0;
      this.cartPrice =0.00
     this.saveLocalStorage()
      
    }

saveLocalStorage(){
  this.tax = Number((this.cartPrice*this.taxRate).toFixed(2))
  localStorage.clear()
  localStorage.setItem('cart',JSON.stringify(this.items))
}
}

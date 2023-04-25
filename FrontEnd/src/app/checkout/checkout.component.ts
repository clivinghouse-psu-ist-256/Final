import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';
import { cartItem } from '../models/cartItem';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  implements OnInit{
  faTrash = faTrash;
  total:Number = 0.00;
  selectedOption: string = "";
  printedOption: string | undefined;
  
  options = [
    { name: "Standard Shipping - 5.99", value: 5.99 },
   
  ]
constructor(public cart:CartService, private route:Router, private apiService:ApiService){

}
getTotal(){
  let tax=this.calcTax();
  this.total = Number((Number(tax+Number(this.selectedOption))).toFixed(2));
   
}
  ngOnInit(): void {
    if(this.cart.numberOfItems <=0){
      this.route.navigate(['/'])
    }
    this.getTotal()
  }
  cartChange(event:any){
    
    
  }
  modifyCount(item:cartItem, val:any){
    
    if(!(val<1)){
      this.cart.modifyCount(item,val)

    }
  this.getTotal()
 
  }

modifyCounts(item:cartItem, event:any){
    let val = Number(event.target.value)
    if(!(val<1)){
      this.cart.modifyCount(item,val)

    }
  this.getTotal()
 
  }
calcTax(){
  return Number((this.cart.cartPrice * 1.06).toFixed(2))
}
  removeItem( item:cartItem){
this.cart.clearItem(item);
if(this.cart.numberOfItems<1){
  this.route.navigate(['/shop'])
}
  }
 

  getImageUrl(upc:any){
    return this.apiService.getImageUrl(upc)
  }
  clearCart(){
    this.cart.clearCart();
    this.route.navigate(['/'])
  }
}

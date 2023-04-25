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
constructor(public cart:CartService, private route:Router, private apiService:ApiService){

}
  ngOnInit(): void {
    if(this.cart.numberOfItems <=0){
      this.route.navigate(['/'])
    }
  }
  cartChange(event:any){
    
    
  }
calcTax(){
  return (this.cart.cartPrice * 1.06).toFixed(2)
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

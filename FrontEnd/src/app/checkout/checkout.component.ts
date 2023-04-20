import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';

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
  getImageUrl(upc:any){
    return this.apiService.getImageUrl(upc)
  }
  clearCart(){
    this.cart.clearCart();
    this.route.navigate(['/ '])
  }
}

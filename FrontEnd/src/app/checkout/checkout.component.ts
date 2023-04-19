import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  implements OnInit{
constructor(public cart:CartService, private route:Router){

}
  ngOnInit(): void {
    if(this.cart.numberOfItems <=0){
      this.route.navigate(['/'])
    }
  }
  cartChange(event:any){
    
    
  }
}

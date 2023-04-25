import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coffee } from '../models/coffee';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem, LottiePlayer } from 'ngx-lottie/lib/symbols';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  animationItem!: AnimationItem;

  options:AnimationOptions = {
    
    
  };
  constructor(public apiSerice:ApiService,private cart:CartService) { }
 declare item:coffee;
  @ViewChild('animation') animationPlayer!:LottiePlayer;
  ngOnInit(): void {
    let upc =window.location.href.split('/').pop()
    console.log(window.location.href.split('/').pop())
  this.apiSerice.getUpc<coffee[]>(String(upc))
  .subscribe((res)=>{
    console.log(res[0])
    this.item=res[0]
  },(error)=>{

  },()=>{})
  // console.log(returnObj)
}
getUrl(upc:any){
 return this.apiSerice.getImageUrl(upc)
}
animationCreated(animationItem: AnimationItem): void {
  this.animationItem = animationItem;
}

stop(): void {
  this.animationItem.destroy();
}
loopComplete(event:any){
  
  
}
addCart(item:coffee){
  this.options =  {
    path: '/assets/cart.json',
    
  };
  this.cart.addToCart(item)
}
}

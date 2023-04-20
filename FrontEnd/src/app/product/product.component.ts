import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coffee } from '../models/coffee';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public apiSerice:ApiService,private cart:CartService) { }
 declare item:coffee;
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
addCart(item:coffee){
  this.cart.addToCart(item)
}
}

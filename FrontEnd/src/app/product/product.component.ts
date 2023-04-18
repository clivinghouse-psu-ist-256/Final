import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coffee } from '../models/coffee';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
 declare item:coffee;
  ngOnInit(): void {
    let upc =window.location.href.split('/').pop()
    console.log(window.location.href.split('/').pop())
  this.http.get<coffee[]>("http://localhost:3000/upc",{params:{
    search: String(upc)
  }}).subscribe((res)=>{
    console.log(res[0])
    this.item=res[0]
  },(error)=>{

  },()=>{})
  // console.log(returnObj)
}

}

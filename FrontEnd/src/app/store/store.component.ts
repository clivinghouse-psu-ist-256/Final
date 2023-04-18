import { Component, OnInit } from '@angular/core';
import { coffee } from '../models/coffee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  declare items:coffee[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    let upc =window.location.href.split('/').pop()
    console.log(window.location.href.split('/').pop())
  this.http.get<coffee[]>("http://localhost:3000/all")
  .subscribe((res)=>{
    console.log(res[0])
    this.items=res
  },(error)=>{

  },()=>{})
  }

}

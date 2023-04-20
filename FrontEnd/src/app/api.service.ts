import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coffee } from './models/coffee';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  urlBase=window.location.origin+'/api'
  /**
   * 
   * @param url include '/'
   * @returns Observable
   */
  get<T>(url:string){
    return this.http.get<T>(this.urlBase+url)
  }
  getUpc<T>(upc:string){
    return this.http.get<T>(this.urlBase+'/upc',{params:{
      search: String(upc)
    }})
  }
  
  getImageUrl(upc:string){
    return this.urlBase+'/image/'+String(upc)+'.jpg'
  }

}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from './cart.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  faCart= faCartShopping;
constructor(public cart:CartService){

}
  
  menuItems = [
    {"title":"Home", "link":['']},
    {"title":"Shop", "link":['shop']}
  ]

  title = 'Store Front';
  copyright="© "+(new Date()).getFullYear() + ' Shoppe'
}

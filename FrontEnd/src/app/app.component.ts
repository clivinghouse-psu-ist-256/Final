import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  menuItems = [
    {"title":"Home", "link":['']},
    {"title":"Shop", "link":['shop']}
  ]

  title = 'Store Front';
  copyright="© "+(new Date()).getFullYear() + ' Shoppe'
}

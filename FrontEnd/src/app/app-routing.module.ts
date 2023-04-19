import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full',title:'Home'},
  {path:'shop',component:StoreComponent,pathMatch:'full',title:'Shop'},
  {path: 'product/:upc',component:ProductComponent,pathMatch:'full'},
  {path:'checkout',component:CheckoutComponent,pathMatch:'full'},
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',component: PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

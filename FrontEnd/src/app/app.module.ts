import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastComponent } from './toast/toast.component';
import { LottieModule, provideLottieOptions } from 'ngx-lottie';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    
    ProductComponent,
          PagenotfoundComponent,
          CheckoutComponent,
          ToastComponent
  ],
  imports: [
    LottieModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideLottieOptions({
      player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

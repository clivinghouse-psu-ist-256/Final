import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full',title:'Home'},
  {path:'store',component:StoreComponent,pathMatch:'full',title:'Store'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

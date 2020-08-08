import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommSellerComponent} from './ecomm-seller.component';


const routes: Routes = [
  {
    path: '',
    component: EcommSellerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommSellerRoutingModule { }

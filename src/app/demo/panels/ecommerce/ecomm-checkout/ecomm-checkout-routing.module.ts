import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommCheckoutComponent} from './ecomm-checkout.component';


const routes: Routes = [
  {
    path: '',
    component: EcommCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommCheckoutRoutingModule { }

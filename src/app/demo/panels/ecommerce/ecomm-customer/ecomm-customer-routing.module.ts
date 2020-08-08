import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommCustomerComponent} from './ecomm-customer.component';


const routes: Routes = [
  {
    path: '',
    component: EcommCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommCustomerRoutingModule { }

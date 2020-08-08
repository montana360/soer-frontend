import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommOrderComponent} from './ecomm-order.component';


const routes: Routes = [
  {
    path: '',
    component: EcommOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommOrderRoutingModule { }

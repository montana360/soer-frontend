import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommProductDetailsComponent} from './ecomm-product-details.component';


const routes: Routes = [
  {
    path: '',
    component: EcommProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommProductDetailsRoutingModule { }

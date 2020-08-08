import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommProductComponent} from './ecomm-product.component';


const routes: Routes = [
  {
    path: '',
    component: EcommProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommProductRoutingModule { }

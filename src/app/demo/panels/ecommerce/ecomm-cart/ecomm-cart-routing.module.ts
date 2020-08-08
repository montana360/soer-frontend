import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommCartComponent} from './ecomm-cart.component';


const routes: Routes = [
  {
    path: '',
    component: EcommCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommCartRoutingModule { }

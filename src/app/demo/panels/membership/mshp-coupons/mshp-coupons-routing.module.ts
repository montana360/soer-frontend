import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MshpCouponsComponent} from './mshp-coupons.component';


const routes: Routes = [
  {
    path: '',
    component: MshpCouponsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MshpCouponsRoutingModule { }

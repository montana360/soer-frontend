import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesShopComponent } from './sales-shop.component';


const routes: Routes = [
  {
    path: '',
    component: SalesShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesShopRoutingModule { }

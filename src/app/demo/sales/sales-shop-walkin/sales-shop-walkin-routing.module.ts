import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesShopWalkinComponent } from './sales-shop-walkin.component';


const routes: Routes = [
  {
    path: '',
    component: SalesShopWalkinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesShopWalkinRoutingModule { }

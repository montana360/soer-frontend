import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseStockComponent } from './purchase-stock.component';


const routes: Routes = [
  {
    path: '',
    component: PurchaseStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseStockRoutingModule { }

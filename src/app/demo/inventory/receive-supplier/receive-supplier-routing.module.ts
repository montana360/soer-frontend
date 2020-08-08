import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveSupplierComponent } from './receive-supplier.component';


const routes: Routes = [
  {
    path: '',
    component: ReceiveSupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveSupplierRoutingModule { }

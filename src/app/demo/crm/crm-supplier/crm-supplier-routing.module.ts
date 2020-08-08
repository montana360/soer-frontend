import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmSupplierComponent } from './crm-supplier.component';


const routes: Routes = [
  {
    path: '',
    component: CrmSupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmSupplierRoutingModule { }

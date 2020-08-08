import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmCustomerTransactionComponent } from './crm-customer-transaction.component';


const routes: Routes = [ {
  path: '',
  component: CrmCustomerTransactionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmCustomerTransactionRoutingModule { }

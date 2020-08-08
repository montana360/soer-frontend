import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmCustomerReportComponent } from './crm-customer-report.component';


const routes: Routes = [
  {
    path: '',
    component: CrmCustomerReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmCustomerReportRoutingModule { }

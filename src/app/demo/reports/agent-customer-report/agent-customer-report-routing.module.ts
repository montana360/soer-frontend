import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentCustomerReportComponent } from './agent-customer-report.component';


const routes: Routes = [
  {
    path: '',
    component: AgentCustomerReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentCustomerReportRoutingModule { }

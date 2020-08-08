import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InactiveCustomersReportComponent } from './inactive-customers-report.component';


const routes: Routes = [
  {
    path: '',
    component: InactiveCustomersReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InactiveCustomersReportRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDurationTimeUpReportComponent } from './customer-duration-time-up-report.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerDurationTimeUpReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDurationTimeUpReportRoutingModule { }

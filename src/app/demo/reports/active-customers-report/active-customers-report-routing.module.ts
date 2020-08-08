import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveCustomersReportComponent } from './active-customers-report.component';


const routes: Routes = [
  {
    path: '',
    component: ActiveCustomersReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveCustomersReportRoutingModule { }

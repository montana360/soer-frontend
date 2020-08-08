import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralCashReportComponent } from './general-cash-report.component';


const routes: Routes = [
  {
    path: '',
    component: GeneralCashReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralCashReportRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenditureReportComponent } from './expenditure-report.component';


const routes: Routes = [
  {
    path: '',
    component: ExpenditureReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenditureReportRoutingModule { }

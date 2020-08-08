import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterStockBranchReportComponent } from './inter-stock-branch-report.component';


const routes: Routes = [
  {
    path: '',
    component: InterStockBranchReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterStockBranchReportRoutingModule { }

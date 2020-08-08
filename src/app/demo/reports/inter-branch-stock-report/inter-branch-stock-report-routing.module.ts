import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterBranchStockReportComponent } from './inter-branch-stock-report.component';


const routes: Routes = [
  {
    path: '',
    component: InterBranchStockReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterBranchStockReportRoutingModule { }

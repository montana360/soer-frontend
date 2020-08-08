import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchStockReportComponent } from './branch-stock-report.component';


const routes: Routes = [
  {
    path: '',
    component: BranchStockReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchStockReportRoutingModule { }

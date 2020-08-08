import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveStockFromBranchReportComponent } from './receive-stock-from-branch-report.component';


const routes: Routes = [ {
  path: '',
  component: ReceiveStockFromBranchReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveStockFromBranchReportRoutingModule { }

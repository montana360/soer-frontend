import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SendStockBackToHqReportComponent } from '../send-stock-back-to-hq-report/send-stock-back-to-hq-report.component';
import { SendStockToBranchReportComponent } from './send-stock-to-branch-report.component';


const routes: Routes = [ {
  path: '',
  component: SendStockToBranchReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendStockToBranchReportRoutingModule { }

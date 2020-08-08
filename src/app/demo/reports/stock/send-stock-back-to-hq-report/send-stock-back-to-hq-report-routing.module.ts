import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendStockBackToHqReportComponent } from './send-stock-back-to-hq-report.component';


const routes: Routes = [ {
  path: '',
  component: SendStockBackToHqReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendStockBackToHqReportRoutingModule { }

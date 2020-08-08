import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveStockReportComponent } from './receive-stock-report.component';


const routes: Routes = [
  {
    path: '',
    component: ReceiveStockReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveStockReportRoutingModule { }

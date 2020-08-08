import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockSalesReportComponent } from './stock-sales-report.component';


const routes: Routes = [
  {
    path: '',
    component: StockSalesReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockSalesReportRoutingModule { }

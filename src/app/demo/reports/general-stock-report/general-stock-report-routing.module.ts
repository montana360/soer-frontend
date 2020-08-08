import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralStockReportComponent } from './general-stock-report.component';


const routes: Routes = [
  {
    path: '',
    component: GeneralStockReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralStockReportRoutingModule { }

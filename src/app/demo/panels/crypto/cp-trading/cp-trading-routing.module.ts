import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpTradingComponent} from './cp-trading.component';


const routes: Routes = [
  {
    path: '',
    component: CpTradingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpTradingRoutingModule { }

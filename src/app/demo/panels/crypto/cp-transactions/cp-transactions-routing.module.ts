import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpTransactionsComponent} from './cp-transactions.component';


const routes: Routes = [
  {
    path: '',
    component: CpTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpTransactionsRoutingModule { }

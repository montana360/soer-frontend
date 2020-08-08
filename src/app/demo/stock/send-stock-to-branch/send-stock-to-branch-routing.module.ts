import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendStockToBranchComponent } from './send-stock-to-branch.component';


const routes: Routes = [
  {
    path: '',
    component: SendStockToBranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendStockToBranchRoutingModule { }

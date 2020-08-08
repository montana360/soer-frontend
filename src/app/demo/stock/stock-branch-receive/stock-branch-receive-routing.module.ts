import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockBranchReceiveComponent } from './stock-branch-receive.component';


const routes: Routes = [
  {
    path: '',
    component: StockBranchReceiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockBranchReceiveRoutingModule { }

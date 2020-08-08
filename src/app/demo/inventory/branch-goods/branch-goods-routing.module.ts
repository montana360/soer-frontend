import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchGoodsComponent } from './branch-goods.component';

const routes: Routes = [
  {
    path: '',
    component: BranchGoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchGoodsRoutingModule { }

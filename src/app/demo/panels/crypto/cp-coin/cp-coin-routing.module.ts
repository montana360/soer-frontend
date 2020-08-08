import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpCoinComponent} from './cp-coin.component';


const routes: Routes = [
  {
    path: '',
    component: CpCoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpCoinRoutingModule { }

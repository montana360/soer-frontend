import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpExchangeComponent} from './cp-exchange.component';


const routes: Routes = [
  {
    path: '',
    component: CpExchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpExchangeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpWalletComponent} from './cp-wallet.component';


const routes: Routes = [
  {
    path: '',
    component: CpWalletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpWalletRoutingModule { }

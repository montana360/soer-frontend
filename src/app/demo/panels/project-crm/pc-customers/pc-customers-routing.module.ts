import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PcCustomersComponent} from './pc-customers.component';


const routes: Routes = [
  {
    path: '',
    component: PcCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcCustomersRoutingModule { }

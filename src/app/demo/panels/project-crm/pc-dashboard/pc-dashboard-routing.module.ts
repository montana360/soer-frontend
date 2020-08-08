import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PcDashboardComponent} from './pc-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: PcDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcDashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpDashboardComponent} from './cp-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CpDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpDashboardRoutingModule { }

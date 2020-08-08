import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospDashboardComponent} from './hosp-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: HospDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospDashboardRoutingModule { }

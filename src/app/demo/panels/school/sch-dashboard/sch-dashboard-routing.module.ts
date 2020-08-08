import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchDashboardComponent} from './sch-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: SchDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchDashboardRoutingModule { }

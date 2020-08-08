import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospDepartmentComponent} from './hosp-department.component';


const routes: Routes = [
  {
    path: '',
    component: HospDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospDepartmentRoutingModule { }

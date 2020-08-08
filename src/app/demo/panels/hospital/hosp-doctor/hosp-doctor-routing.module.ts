import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospDoctorComponent} from './hosp-doctor.component';


const routes: Routes = [
  {
    path: '',
    component: HospDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospDoctorRoutingModule { }

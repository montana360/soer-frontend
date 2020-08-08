import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospPatientComponent} from './hosp-patient.component';


const routes: Routes = [
  {
    path: '',
    component: HospPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospPatientRoutingModule { }

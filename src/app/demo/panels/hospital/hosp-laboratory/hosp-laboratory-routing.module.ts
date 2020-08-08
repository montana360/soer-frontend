import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospLaboratoryComponent} from './hosp-laboratory.component';


const routes: Routes = [
  {
    path: '',
    component: HospLaboratoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospLaboratoryRoutingModule { }

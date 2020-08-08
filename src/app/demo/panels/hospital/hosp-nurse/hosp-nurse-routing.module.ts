import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospNurseComponent} from './hosp-nurse.component';


const routes: Routes = [
  {
    path: '',
    component: HospNurseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospNurseRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospPharmacistComponent} from './hosp-pharmacist.component';


const routes: Routes = [
  {
    path: '',
    component: HospPharmacistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospPharmacistRoutingModule { }

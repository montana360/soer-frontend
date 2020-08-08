import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MshpCountryComponent} from './mshp-country.component';


const routes: Routes = [
  {
    path: '',
    component: MshpCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MshpCountryRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpIcoComponent} from './cp-ico.component';


const routes: Routes = [
  {
    path: '',
    component: CpIcoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpIcoRoutingModule { }

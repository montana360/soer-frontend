import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SisLeaveComponent} from './sis-leave.component';


const routes: Routes = [
  {
    path: '',
    component: SisLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisLeaveRoutingModule { }

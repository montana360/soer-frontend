import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PcTaskComponent} from './pc-task.component';


const routes: Routes = [
  {
    path: '',
    component: PcTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcTaskRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PcProjectComponent} from './pc-project.component';


const routes: Routes = [
  {
    path: '',
    component: PcProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcProjectRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SisEvaluationComponent} from './sis-evaluation.component';


const routes: Routes = [
  {
    path: '',
    component: SisEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisEvaluationRoutingModule { }

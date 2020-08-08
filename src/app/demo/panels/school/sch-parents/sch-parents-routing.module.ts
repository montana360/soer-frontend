import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchParentsComponent} from './sch-parents.component';


const routes: Routes = [
  {
    path: '',
    component: SchParentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchParentsRoutingModule { }

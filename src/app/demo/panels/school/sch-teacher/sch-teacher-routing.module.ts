import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchTeacherComponent} from './sch-teacher.component';


const routes: Routes = [
  {
    path: '',
    component: SchTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchTeacherRoutingModule { }

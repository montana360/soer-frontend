import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchStudentComponent} from './sch-student.component';


const routes: Routes = [
  {
    path: '',
    component: SchStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchStudentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SisCourseComponent} from './sis-course.component';


const routes: Routes = [
  {
    path: '',
    component: SisCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisCourseRoutingModule { }

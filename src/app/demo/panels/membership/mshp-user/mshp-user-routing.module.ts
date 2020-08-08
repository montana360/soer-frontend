import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MshpUserComponent} from './mshp-user.component';


const routes: Routes = [
  {
    path: '',
    component: MshpUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MshpUserRoutingModule { }

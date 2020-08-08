import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MshpMembershipComponent} from './mshp-membership.component';


const routes: Routes = [
  {
    path: '',
    component: MshpMembershipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MshpMembershipRoutingModule { }

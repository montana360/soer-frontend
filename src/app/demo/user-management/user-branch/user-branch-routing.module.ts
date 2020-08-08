import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBranchComponent } from './user-branch.component';


const routes: Routes = [
  {
    path: '',
    component: UserBranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBranchRoutingModule { }

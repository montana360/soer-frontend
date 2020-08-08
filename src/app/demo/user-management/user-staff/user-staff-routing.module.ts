import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserStaffComponent } from './user-staff.component';


const routes: Routes = [
  {
    path: '',
    component: UserStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStaffRoutingModule { }

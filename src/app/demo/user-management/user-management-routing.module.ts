import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'user-dash',
        loadChildren: () => import('./user-dash/user-dash.module').then(module => module.UserDashModule)
      },
      {
        path: 'user-branch',
        loadChildren: () => import('./user-branch/user-branch.module').then(module => module.UserBranchModule)
      },
      {
        path: 'user-staff',
        loadChildren: () => import('./user-staff/user-staff.module').then(module => module.UserStaffModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

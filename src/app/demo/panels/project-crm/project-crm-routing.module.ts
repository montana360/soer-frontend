import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pc-dashboard',
        loadChildren: () => import('./pc-dashboard/pc-dashboard.module').then(module => module.PcDashboardModule)
      },
      {
        path: 'pc-customers',
        loadChildren: () => import('./pc-customers/pc-customers.module').then(module => module.PcCustomersModule)
      },
      {
        path: 'pc-project',
        loadChildren: () => import('./pc-project/pc-project.module').then(module => module.PcProjectModule)
      },
      {
        path: 'pc-task',
        loadChildren: () => import('./pc-task/pc-task.module').then(module => module.PcTaskModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCrmRoutingModule { }

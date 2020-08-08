import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sis-dashboard',
        loadChildren: () => import('./sis-dashboard/sis-dashboard.module').then(module => module.SisDashboardModule)
      },
      {
        path: 'sis-leave',
        loadChildren: () => import('./sis-leave/sis-leave.module').then(module => module.SisLeaveModule)
      },
      {
        path: 'sis-evaluation',
        loadChildren: () => import('./sis-evaluation/sis-evaluation.module').then(module => module.SisEvaluationModule)
      },
      {
        path: 'sis-event',
        loadChildren: () => import('./sis-event/sis-event.module').then(module => module.SisEventModule)
      },
      {
        path: 'sis-circular',
        loadChildren: () => import('./sis-circular/sis-circular.module').then(module => module.SisCircularModule)
      },
      {
        path: 'sis-course',
        loadChildren: () => import('./sis-course/sis-course.module').then(module => module.SisCourseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisRoutingModule { }

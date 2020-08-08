import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sch-dashboard',
        loadChildren: () => import('./sch-dashboard/sch-dashboard.module').then(module => module.SchDashboardModule)
      },
      {
        path: 'sch-student',
        loadChildren: () => import('./sch-student/sch-student.module').then(module => module.SchStudentModule)
      },
      {
        path: 'sch-parents',
        loadChildren: () => import('./sch-parents/sch-parents.module').then(module => module.SchParentsModule)
      },
      {
        path: 'sch-teacher',
        loadChildren: () => import('./sch-teacher/sch-teacher.module').then(module => module.SchTeacherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }

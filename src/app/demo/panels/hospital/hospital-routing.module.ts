import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hosp-dashboard',
        loadChildren: () => import('./hosp-dashboard/hosp-dashboard.module').then(module => module.HospDashboardModule)
      },
      {
        path: 'hosp-department',
        loadChildren: () => import('./hosp-department/hosp-department.module').then(module => module.HospDepartmentModule)
      },
      {
        path: 'hosp-doctor',
        loadChildren: () => import('./hosp-doctor/hosp-doctor.module').then(module => module.HospDoctorModule)
      },
      {
        path: 'hosp-patient',
        loadChildren: () => import('./hosp-patient/hosp-patient.module').then(module => module.HospPatientModule)
      },
      {
        path: 'hosp-nurse',
        loadChildren: () => import('./hosp-nurse/hosp-nurse.module').then(module => module.HospNurseModule)
      },
      {
        path: 'hosp-pharmacist',
        loadChildren: () => import('./hosp-pharmacist/hosp-pharmacist.module').then(module => module.HospPharmacistModule)
      },
      {
        path: 'hosp-laboratory',
        loadChildren: () => import('./hosp-laboratory/hosp-laboratory.module').then(module => module.HospLaboratoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }

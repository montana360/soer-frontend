import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mshp-dashboard',
        loadChildren: () => import('./mshp-dashboard/mshp-dashboard.module').then(module => module.MshpDashboardModule)
      },
      {
        path: 'mshp-email',
        loadChildren: () => import('./mshp-email/mshp-email.module').then(module => module.MshpEmailModule)
      },
      {
        path: 'mshp-country',
        loadChildren: () => import('./mshp-country/mshp-country.module').then(module => module.MshpCountryModule)
      },
      {
        path: 'mshp-coupons',
        loadChildren: () => import('./mshp-coupons/mshp-coupons.module').then(module => module.MshpCouponsModule)
      },
      {
        path: 'mshp-newsletter',
        loadChildren: () => import('./mshp-newsletter/mshp-newsletter.module').then(module => module.MshpNewsletterModule)
      },
      {
        path: 'mshp-user',
        loadChildren: () => import('./mshp-user/mshp-user.module').then(module => module.MshpUserModule)
      },
      {
        path: 'mshp-membership',
        loadChildren: () => import('./mshp-membership/mshp-membership.module').then(module => module.MshpMembershipModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }

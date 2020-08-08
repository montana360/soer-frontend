import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'crm-dash',
      //   loadChildren: () =>
      //     import('./crm-dash/crm-dash.module').then(
      //       module => module.CrmDashModule
      //     )
      // },
      {
        path: 'crm-debtor',
        loadChildren: () =>
          import('./crm-debtor/crm-debtor.module').then(
            module => module.CrmDebtorModule
          )
      },
      {
        path: 'crm-depositor',
        loadChildren: () =>
          import('./crm-depositor/crm-depositor.module').then(
            module => module.CrmDepositorModule
          )
      },
      {
        path: 'crm-deb-deposits',
        loadChildren: () =>
          import('./crm-deb-deposits/crm-deb-deposits.module').then(
            module => module.CrmDebDepositsModule
          )
      },
      {
        path: 'customer-report',
        loadChildren: () =>
          import(
            './crm-customer-transaction/crm-customer-transaction.module'
          ).then(module => module.CrmCustomerTransactionModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule {}

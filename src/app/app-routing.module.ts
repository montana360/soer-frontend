import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './demo/guards/auth.guard';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { UserComponent } from './theme/layout/user/user.component';
import { CrmComponent } from './theme/layout/crm/crm.component';
import { InventoryComponent } from './theme/layout/inventory/inventory.component';
import { StockComponent } from './theme/layout/stock/stock.component';
import { TransactionComponent } from './theme/layout/transaction/transaction.component';
import { SalesShopComponent } from './theme/layout/sales-shop/sales-shop.component';
import { ReportComponent } from './theme/layout/report/report.component';
import { SettingsComponent } from './theme/layout/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./demo/dashboard/dashboard.module').then(
            module => module.DashboardModule
          )
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./demo/pages/authentication/authentication.module').then(
            module => module.AuthenticationModule
          )
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./demo/pages/maintenance/maintenance.module').then(
            module => module.MaintenanceModule
          )
      }
    ]
  },
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./demo/user-management/user-management.module').then(
            module => module.UserManagementModule
          )
      }
    ]
  },
  {
    path: '',
    component: CrmComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'crm',
        loadChildren: () =>
          import('./demo/crm/crm.module').then(module => module.CrmModule)
      }
    ]
  },
  {
    path: '',
    component: InventoryComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'inventory',
        loadChildren: () =>
          import('./demo/inventory/inventory.module').then(module => module.InventoryModule)
      }
    ]
  },
  {
    path: '',
    component: StockComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'stock',
        loadChildren: () =>
          import('./demo/stock/stock.module').then(
            module => module.StockModule
          )
      }
    ]
  },
  {
    path: '',
    component: TransactionComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'transaction',
        loadChildren: () =>
          import('./demo/transaction/transaction.module').then(
            module => module.TransactionModule
          )
      }
    ]
  },
  {
    path: '',
    component: SalesShopComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sales',
        loadChildren: () =>
          import('./demo/sales/sales.module').then(
            module => module.SalesModule
          )
      }
    ]
  },
  {
    path: '',
    component: ReportComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'reports',
        loadChildren: () =>
          import('./demo/reports/reports.module').then(
            module => module.ReportsModule
          )
      }
    ]
  },
  {
    path: '',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('./demo/settings/settings.module').then(
            module => module.SettingsModule
          )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

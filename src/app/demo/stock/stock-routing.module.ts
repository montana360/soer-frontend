import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'stock-receive',
        loadChildren: () => import('./receive-stock/receive-stock.module').then(module => module.ReceiveStockModule)
      },
      {
        path: 'stock-admin',
        loadChildren: () => import('./send-stock-to-admin/send-stock-to-admin.module').then(module => module.SendStockToAdminModule)
      },
      {
        path: 'stock-branch',
        loadChildren: () => import('./send-stock-to-branch/send-stock-to-branch.module').then(module => module.SendStockToBranchModule)
      },
      {
        path: 'stock-branch-receive',
        loadChildren: () => import('./stock-branch-receive/stock-branch-receive.module').then(module => module.StockBranchReceiveModule)
      },
      {
        path: 'stock-other-branch',
        loadChildren: () => import('./stock-other-branch/stock-other-branch.module').then(module => module.StockOtherBranchModule)
      },
      {
        path: 'stock-report',
        loadChildren: () => import('./stock-list/stock-list.module').then(module => module.StockListModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }

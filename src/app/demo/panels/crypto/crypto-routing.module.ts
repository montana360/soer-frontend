import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cp-dashboard',
        loadChildren: () => import('./cp-dashboard/cp-dashboard.module').then(module => module.CpDashboardModule)
      },
      {
        path: 'cp-exchange',
        loadChildren: () => import('./cp-exchange/cp-exchange.module').then(module => module.CpExchangeModule)
      },
      {
        path: 'cp-wallet',
        loadChildren: () => import('./cp-wallet/cp-wallet.module').then(module => module.CpWalletModule)
      },
      {
        path: 'cp-transactions',
        loadChildren: () => import('./cp-transactions/cp-transactions.module').then(module => module.CpTransactionsModule)
      },
      {
        path: 'cp-history',
        loadChildren: () => import('./cp-history/cp-history.module').then(module => module.CpHistoryModule)
      },
      {
        path: 'cp-trading',
        loadChildren: () => import('./cp-trading/cp-trading.module').then(module => module.CpTradingModule)
      },
      {
        path: 'cp-coin',
        loadChildren: () => import('./cp-coin/cp-coin.module').then(module => module.CpCoinModule)
      },
      {
        path: 'cp-ico',
        loadChildren: () => import('./cp-ico/cp-ico.module').then(module => module.CpIcoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }

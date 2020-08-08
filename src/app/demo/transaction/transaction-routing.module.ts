import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'receive-cash',
        loadChildren: () => import('./receive-cash/receive-cash.module').then(module => module.ReceiveCashModule)
      },
      {
        path: 'agent-disbursement',
        loadChildren: () => import('./agent-disbursement/agent-disbursement.module').then(module => module.AgentDisbursementModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('./expenses/expenses.module').then(module => module.ExpensesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }

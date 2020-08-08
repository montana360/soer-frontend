import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agent-consumer',
        loadChildren: () => import('./agent-consumer/agent-consumer.module').then(module => module.AgentConsumerModule)
      },
      {
        path: 'branch-goods',
        loadChildren: () => import('./branch-goods/branch-goods.module').then(module => module.BranchGoodsModule)
      },
      {
        path: 'inter-agent',
        loadChildren: () => import('./inter-agent/inter-agent.module').then(module => module.InterAgentModule)
      },
      {
        path: 'ista-agent',
        loadChildren: () => import('./ista-agent/ista-agent.module').then(module => module.IstaAgentModule)
      },
      {
        path: 'ista-returns',
        loadChildren: () => import('./ista-returns/ista-returns.module').then(module => module.IstaReturnsModule)
      },
      {
        path: 'isto-outlet',
        loadChildren: () => import('./isto-outlet/isto-outlet.module').then(module => module.IstoOutletModule)
      },
      {
        path: 'purchase-stock',
        loadChildren: () => import('./purchase-stock/purchase-stock.module').then(module => module.PurchaseStockModule)
      },
      {
        path: 'receive-stock',
        loadChildren: () => import('./receive-stock/receive-stock.module').then(module => module.ReceiveStockModule)
      },
      {
        path: 'receive-supplier',
        loadChildren: () => import('./receive-supplier/receive-supplier.module').then(module => module.ReceiveSupplierModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

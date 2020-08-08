import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sales-shop',
        loadChildren: () => import('./sales-shop/sales-shop.module').then(module => module.SalesShopModule)
      },
      {
        path: 'sales-shop-walkin',
        loadChildren: () => import('./sales-shop-walkin/sales-shop-walkin.module').then(module => module.SalesShopWalkinModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

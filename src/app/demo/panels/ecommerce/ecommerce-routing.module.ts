import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ecomm-product',
        loadChildren: () => import('./ecomm-product/ecomm-product.module').then(module => module.EcommProductModule)
      },
      {
        path: 'ecomm-product-details',
        loadChildren: () => import('./ecomm-product-details/ecomm-product-details.module').then(module => module.EcommProductDetailsModule)
      },
      {
        path: 'ecomm-order',
        loadChildren: () => import('./ecomm-order/ecomm-order.module').then(module => module.EcommOrderModule)
      },
      {
        path: 'ecomm-checkout',
        loadChildren: () => import('./ecomm-checkout/ecomm-checkout.module').then(module => module.EcommCheckoutModule)
      },
      {
        path: 'ecomm-cart',
        loadChildren: () => import('./ecomm-cart/ecomm-cart.module').then(module => module.EcommCartModule)
      },
      {
        path: 'ecomm-customer',
        loadChildren: () => import('./ecomm-customer/ecomm-customer.module').then(module => module.EcommCustomerModule)
      },
      {
        path: 'ecomm-seller',
        loadChildren: () => import('./ecomm-seller/ecomm-seller.module').then(module => module.EcommSellerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }

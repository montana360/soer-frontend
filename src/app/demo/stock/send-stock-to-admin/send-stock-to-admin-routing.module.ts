import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendStockToAdminComponent } from './send-stock-to-admin.component';


const routes: Routes = [
  {
    path: '',
    component: SendStockToAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendStockToAdminRoutingModule { }

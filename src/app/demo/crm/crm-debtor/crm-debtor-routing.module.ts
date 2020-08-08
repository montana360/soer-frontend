import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDebtorComponent } from './crm-debtor.component';


const routes: Routes = [
  {
    path: '',
    component: CrmDebtorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmDebtorRoutingModule { }

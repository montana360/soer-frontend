import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDebDepositsComponent } from './crm-deb-deposits.component';


const routes: Routes = [
  {
    path: '',
    component: CrmDebDepositsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmDebDepositsRoutingModule { }

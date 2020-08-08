import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmPolicyComponent } from './crm-policy.component';


const routes: Routes = [
  {
    path: '',
    component: CrmPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmPolicyRoutingModule { }

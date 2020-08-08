import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDisbursementComponent } from './agent-disbursement.component';


const routes: Routes = [
  {
    path: '',
    component: AgentDisbursementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentDisbursementRoutingModule { }

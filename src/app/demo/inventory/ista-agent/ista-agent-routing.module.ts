import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IstaAgentComponent } from './ista-agent.component';


const routes: Routes = [
  {
    path: '',
    component: IstaAgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IstaAgentRoutingModule { }

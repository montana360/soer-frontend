import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterAgentComponent } from './inter-agent.component';


const routes: Routes = [
  {
    path: '',
    component: InterAgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterAgentRoutingModule { }

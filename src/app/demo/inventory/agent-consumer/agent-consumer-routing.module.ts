import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentConsumerComponent } from './agent-consumer.component';


const routes: Routes = [
  {
    path: '',
    component: AgentConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentConsumerRoutingModule { }

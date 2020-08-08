import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDepositorComponent } from './crm-depositor.component';


const routes: Routes = [
  {
    path: '',
    component: CrmDepositorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmDepositorRoutingModule { }

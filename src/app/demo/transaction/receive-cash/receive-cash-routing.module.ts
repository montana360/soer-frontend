import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveCashComponent } from './receive-cash.component';


const routes: Routes = [
  {
    path: '',
    component: ReceiveCashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveCashRoutingModule { }

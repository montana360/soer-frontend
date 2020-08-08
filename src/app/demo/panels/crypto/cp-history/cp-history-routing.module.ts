import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpHistoryComponent} from './cp-history.component';


const routes: Routes = [
  {
    path: '',
    component: CpHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpHistoryRoutingModule { }

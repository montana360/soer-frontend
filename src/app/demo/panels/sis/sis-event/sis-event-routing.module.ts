import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SisEventComponent} from './sis-event.component';


const routes: Routes = [
  {
    path: '',
    component: SisEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisEventRoutingModule { }

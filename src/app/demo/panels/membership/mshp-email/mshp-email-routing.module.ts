import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MshpEmailComponent} from './mshp-email.component';


const routes: Routes = [
  {
    path: '',
    component: MshpEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MshpEmailRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SisCircularComponent} from './sis-circular.component';


const routes: Routes = [
  {
    path: '',
    component: SisCircularComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisCircularRoutingModule { }

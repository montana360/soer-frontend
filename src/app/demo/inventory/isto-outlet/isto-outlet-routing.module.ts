import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IstoOutletComponent } from './isto-outlet.component';


const routes: Routes = [
  {
    path: '',
    component: IstoOutletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IstoOutletRoutingModule { }

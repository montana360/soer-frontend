import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IstaReturnsComponent } from './ista-returns.component';


const routes: Routes = [
  {
    path: '',
    component: IstaReturnsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IstaReturnsRoutingModule { }

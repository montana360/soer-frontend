import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDiscountClassComponent } from './crm-discount-class.component';


const routes: Routes = [
  {
    path: '',
    component: CrmDiscountClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmDiscountClassRoutingModule { }

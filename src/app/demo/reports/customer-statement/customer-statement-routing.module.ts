import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerStatementComponent } from './customer-statement.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerStatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerStatementRoutingModule { }

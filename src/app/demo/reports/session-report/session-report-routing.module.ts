import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionReportComponent } from './session-report.component';


const routes: Routes = [
  {
    path: '',
    component: SessionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionReportRoutingModule { }

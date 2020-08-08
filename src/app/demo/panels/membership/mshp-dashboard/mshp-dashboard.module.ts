import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpDashboardRoutingModule } from './mshp-dashboard-routing.module';
import { MshpDashboardComponent } from './mshp-dashboard.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [MshpDashboardComponent],
  imports: [
    CommonModule,
    MshpDashboardRoutingModule,
    SharedModule
  ]
})
export class MshpDashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpDashboardRoutingModule } from './cp-dashboard-routing.module';
import { CpDashboardComponent } from './cp-dashboard.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [CpDashboardComponent],
  imports: [
    CommonModule,
    CpDashboardRoutingModule,
    SharedModule
  ]
})
export class CpDashboardModule { }

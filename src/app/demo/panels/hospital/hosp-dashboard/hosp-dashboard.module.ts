import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospDashboardRoutingModule } from './hosp-dashboard-routing.module';
import { HospDashboardComponent } from './hosp-dashboard.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [HospDashboardComponent],
  imports: [
    CommonModule,
    HospDashboardRoutingModule,
    SharedModule
  ]
})
export class HospDashboardModule { }

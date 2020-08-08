import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchDashboardRoutingModule } from './sch-dashboard-routing.module';
import { SchDashboardComponent } from './sch-dashboard.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from '@fullcalendar/angular';


@NgModule({
  declarations: [SchDashboardComponent],
  imports: [
    CommonModule,
    SchDashboardRoutingModule,
    SharedModule,
    FullCalendarModule,
    FormsModule
  ]
})
export class SchDashboardModule { }

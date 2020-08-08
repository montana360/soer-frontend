import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisDashboardRoutingModule } from './sis-dashboard-routing.module';
import { SisDashboardComponent } from './sis-dashboard.component';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from '@fullcalendar/angular';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [SisDashboardComponent],
  imports: [
    CommonModule,
    SisDashboardRoutingModule,
    SharedModule,
    FullCalendarModule,
    FormsModule
  ]
})
export class SisDashboardModule { }

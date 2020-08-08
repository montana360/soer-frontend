import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmDashRoutingModule } from './crm-dash-routing.module';
import { CrmDashComponent } from './crm-dash.component';


@NgModule({
  declarations: [CrmDashComponent],
  imports: [
    CommonModule,
    CrmDashRoutingModule
  ]
})
export class CrmDashModule { }

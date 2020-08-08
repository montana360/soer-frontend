import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisEventRoutingModule } from './sis-event-routing.module';
import { SisEventComponent } from './sis-event.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [SisEventComponent],
  imports: [
    CommonModule,
    SisEventRoutingModule,
    SharedModule
  ]
})
export class SisEventModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisCircularRoutingModule } from './sis-circular-routing.module';
import { SisCircularComponent } from './sis-circular.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SisCircularComponent],
  imports: [
    CommonModule,
    SisCircularRoutingModule,
    SharedModule,
    NgbTabsetModule
  ]
})
export class SisCircularModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpIcoRoutingModule } from './cp-ico-routing.module';
import { CpIcoComponent } from './cp-ico.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CpIcoComponent],
  imports: [
    CommonModule,
    CpIcoRoutingModule,
    SharedModule,
    NgbTabsetModule
  ]
})
export class CpIcoModule { }

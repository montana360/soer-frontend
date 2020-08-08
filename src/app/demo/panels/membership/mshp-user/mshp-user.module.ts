import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpUserRoutingModule } from './mshp-user-routing.module';
import { MshpUserComponent } from './mshp-user.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MshpUserComponent],
  imports: [
    CommonModule,
    MshpUserRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class MshpUserModule { }

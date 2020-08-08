import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpMembershipRoutingModule } from './mshp-membership-routing.module';
import { MshpMembershipComponent } from './mshp-membership.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [MshpMembershipComponent],
  imports: [
    CommonModule,
    MshpMembershipRoutingModule,
    SharedModule
  ]
})
export class MshpMembershipModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpExchangeRoutingModule } from './cp-exchange-routing.module';
import { CpExchangeComponent } from './cp-exchange.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [CpExchangeComponent],
  imports: [
    CommonModule,
    CpExchangeRoutingModule,
    SharedModule
  ]
})
export class CpExchangeModule { }

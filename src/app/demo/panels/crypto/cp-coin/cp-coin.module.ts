import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpCoinRoutingModule } from './cp-coin-routing.module';
import { CpCoinComponent } from './cp-coin.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [CpCoinComponent],
  imports: [
    CommonModule,
    CpCoinRoutingModule,
    SharedModule
  ]
})
export class CpCoinModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpWalletRoutingModule } from './cp-wallet-routing.module';
import { CpWalletComponent } from './cp-wallet.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [CpWalletComponent],
  imports: [
    CommonModule,
    CpWalletRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CpWalletModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpCountryRoutingModule } from './mshp-country-routing.module';
import { MshpCountryComponent } from './mshp-country.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MshpCountryComponent],
  imports: [
    CommonModule,
    MshpCountryRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class MshpCountryModule { }

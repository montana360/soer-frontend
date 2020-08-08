import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisEvaluationRoutingModule } from './sis-evaluation-routing.module';
import { SisEvaluationComponent } from './sis-evaluation.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [SisEvaluationComponent],
  imports: [
    CommonModule,
    SisEvaluationRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SisEvaluationModule { }

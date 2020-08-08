import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchParentsRoutingModule } from './sch-parents-routing.module';
import { SchParentsComponent } from './sch-parents.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [SchParentsComponent],
  imports: [
    CommonModule,
    SchParentsRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SchParentsModule { }

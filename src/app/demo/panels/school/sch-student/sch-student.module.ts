import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchStudentRoutingModule } from './sch-student-routing.module';
import { SchStudentComponent } from './sch-student.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [SchStudentComponent],
  imports: [
    CommonModule,
    SchStudentRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SchStudentModule { }

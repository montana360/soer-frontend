import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchTeacherRoutingModule } from './sch-teacher-routing.module';
import { SchTeacherComponent } from './sch-teacher.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [SchTeacherComponent],
  imports: [
    CommonModule,
    SchTeacherRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SchTeacherModule { }

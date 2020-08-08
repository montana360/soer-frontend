import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisCourseRoutingModule } from './sis-course-routing.module';
import { SisCourseComponent } from './sis-course.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SisCourseComponent],
  imports: [
    CommonModule,
    SisCourseRoutingModule,
    SharedModule,
    NgbTabsetModule
  ]
})
export class SisCourseModule { }

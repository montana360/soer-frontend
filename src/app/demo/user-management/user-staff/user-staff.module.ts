import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStaffRoutingModule } from './user-staff-routing.module';
import { UserStaffComponent } from './user-staff.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';

@NgModule({
  declarations: [UserStaffComponent],
  imports: [
    CommonModule,
    UserStaffRoutingModule,
    SharedModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule
  ]
})
export class UserStaffModule {}

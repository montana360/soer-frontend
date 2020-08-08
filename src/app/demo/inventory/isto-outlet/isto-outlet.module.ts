import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IstoOutletRoutingModule } from './isto-outlet-routing.module';
import { IstoOutletComponent } from './isto-outlet.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';



@NgModule({
  declarations: [IstoOutletComponent],
  imports: [
    CommonModule,
    IstoOutletRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class IstoOutletModule {}

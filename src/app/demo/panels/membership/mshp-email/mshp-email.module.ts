import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpEmailRoutingModule } from './mshp-email-routing.module';
import { MshpEmailComponent } from './mshp-email.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {TinymceModule} from 'angular2-tinymce';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MshpEmailComponent],
  imports: [
    CommonModule,
    MshpEmailRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule,
    TinymceModule
  ]
})
export class MshpEmailModule { }

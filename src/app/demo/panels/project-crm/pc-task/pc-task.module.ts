import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcTaskRoutingModule } from './pc-task-routing.module';
import { PcTaskComponent } from './pc-task.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {TinymceModule} from 'angular2-tinymce';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';


@NgModule({
  declarations: [PcTaskComponent],
  imports: [
    CommonModule,
    PcTaskRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule
  ]
})
export class PcTaskModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpNewsletterRoutingModule } from './mshp-newsletter-routing.module';
import { MshpNewsletterComponent } from './mshp-newsletter.component';
import {FormsModule} from '@angular/forms';
import {TinymceModule} from 'angular2-tinymce';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [MshpNewsletterComponent],
  imports: [
    CommonModule,
    MshpNewsletterRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule,
    TinymceModule
  ]
})
export class MshpNewsletterModule { }

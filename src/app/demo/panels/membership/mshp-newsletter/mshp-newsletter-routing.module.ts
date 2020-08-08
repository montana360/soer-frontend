import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MshpNewsletterComponent} from './mshp-newsletter.component';


const routes: Routes = [
  {
    path: '',
    component: MshpNewsletterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MshpNewsletterRoutingModule { }

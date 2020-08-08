import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashRoutingModule } from './user-dash-routing.module';
import { UserDashComponent } from './user-dash.component';


@NgModule({
  declarations: [UserDashComponent],
  imports: [
    CommonModule,
    UserDashRoutingModule
  ]
})
export class UserDashModule { }

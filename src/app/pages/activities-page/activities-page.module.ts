import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesPageRoutingModule } from './activities-page-routing.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';


@NgModule({
  declarations: [
    ActivitiesPageComponent
  ],
  imports: [
    CommonModule,
    ActivitiesPageRoutingModule
  ]
})
export class ActivitiesPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesPageRoutingModule } from './activities-page-routing.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { TimetableModule } from '../../components/timetable/timetable.module';
import { GymsesionModule } from '../../components/gymsesion/gymsesion.module';

@NgModule({
  declarations: [ActivitiesPageComponent],
  imports: [CommonModule, ActivitiesPageRoutingModule, GymsesionModule],
})
export class ActivitiesPageModule {}

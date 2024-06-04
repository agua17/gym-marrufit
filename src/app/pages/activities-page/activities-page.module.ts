import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesPageRoutingModule } from './activities-page-routing.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { TimetableModule } from '../../components/timetable/timetable.module';
import { GymsesionModule } from '../../components/gymsesion/gymsesion.module';
import { MenuModule } from '../../components/menu/menu.module';

@NgModule({
  declarations: [ActivitiesPageComponent],
  imports: [
    CommonModule,
    ActivitiesPageRoutingModule,
    GymsesionModule,
    MenuModule,
  ],
})
export class ActivitiesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetablePageRoutingModule } from './timetable-page-routing.module';
import { TimetablePageComponent } from './timetable-page/timetable-page.component';
import { MenuModule } from '../../components/menu/menu.module';
import { TimetableModule } from '../../components/timetable/timetable.module';

@NgModule({
  declarations: [TimetablePageComponent],
  imports: [
    CommonModule,
    TimetablePageRoutingModule,
    MenuModule,
    TimetableModule,
  ],
})
export class TimetablePageModule {}

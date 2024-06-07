import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { MenuModule } from '../menu/menu.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [TimetableComponent],
  exports: [TimetableComponent],
  imports: [CommonModule, TimetableRoutingModule, MaterialModule],
})
export class TimetableModule {}

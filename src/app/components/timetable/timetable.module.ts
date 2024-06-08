import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimetableComponent],
  exports: [TimetableComponent],
  imports: [CommonModule, TimetableRoutingModule, FormsModule],
})
export class TimetableModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetablePageComponent } from './timetable-page/timetable-page.component';

const routes: Routes = [
  {
    path: '',
    component: TimetablePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimetablePageRoutingModule {}

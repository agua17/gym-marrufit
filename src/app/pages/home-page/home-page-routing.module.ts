import { ActivitiesPageComponent } from './../activities-page/activities-page/activities-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from '../login-page/login-page/login-page.component';
import { TimetablePageComponent } from '../timetable-page/timetable-page/timetable-page.component';
import { HistoryPageComponent } from '../history-page/history-page/history-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

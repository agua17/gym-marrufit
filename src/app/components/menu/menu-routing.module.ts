import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../../pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../../pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'horarios',
    loadChildren: () =>
      import('../../pages/timetable-page/timetable-page.module').then(
        (m) => m.TimetablePageModule
      ),
  },
  {
    path: 'conocenos',
    loadChildren: () =>
      import('../../pages/history-page/history-page.module').then(
        (m) => m.HistoryPageModule
      ),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('../../pages/activities-page/activities-page.module').then(
        (m) => m.ActivitiesPageModule
      ),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}

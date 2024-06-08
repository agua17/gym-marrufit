import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'horarios',
    loadChildren: () =>
      import('./pages/timetable-page/timetable-page.module').then(
        (m) => m.TimetablePageModule
      ),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
  },

  {
    path: 'servicios',
    loadChildren: () =>
      import('./pages/activities-page/activities-page.module').then(
        (m) => m.ActivitiesPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'historia',
    loadChildren: () =>
      import('./pages/history-page/history-page.module').then(
        (m) => m.HistoryPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

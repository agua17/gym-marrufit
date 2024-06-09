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
    path: 'registro',
    loadChildren: () =>
      import('../../pages/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
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
  {
    path: 'detalleUsuario',
    loadChildren: () =>
      import('../../pages/user-detail-page/user-detail-page.module').then(
        (m) => m.UserDetailPageModule
      ),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}

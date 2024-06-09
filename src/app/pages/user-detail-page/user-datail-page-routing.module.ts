import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailPageRoutingModule {}

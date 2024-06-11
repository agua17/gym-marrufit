import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { UserDetailPageRoutingModule } from './user-datail-page-routing.module';
import { MenuModule } from '../../components/menu/menu.module';
import { UserDetailModule } from '../../components/user-detail/user-detail.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [UserDetailPageComponent],
  imports: [
    CommonModule,
    UserDetailPageRoutingModule,
    MenuModule,
    UserDetailModule,
    FooterModule,
  ],
})
export class UserDetailPageModule {}

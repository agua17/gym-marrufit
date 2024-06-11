import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialModule } from '../../material/material.module';
import { LoginModule } from '../../components/login/login.module';
import { MenuModule } from '../../components/menu/menu.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MaterialModule,
    LoginModule,
    MenuModule,
    FooterModule,
  ],
})
export class LoginPageModule {}

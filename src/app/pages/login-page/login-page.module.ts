import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialModule } from '../../material/material.module';
import { LoginModule } from '../../components/login/login.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginPageRoutingModule, MaterialModule, LoginModule],
})
export class LoginPageModule {}

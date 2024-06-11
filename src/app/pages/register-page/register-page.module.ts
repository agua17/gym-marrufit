import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegistrationModule } from '../../components/registration/registration.module';
import { MenuModule } from '../../components/menu/menu.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    RegistrationModule,
    MenuModule,
    FooterModule,
  ],
})
export class RegisterPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterIntroRoutingModule } from './footer-intro-routing.module';
import { FooterIntroComponent } from './footer-intro/footer-intro.component';

@NgModule({
  declarations: [FooterIntroComponent],
  imports: [CommonModule, FooterIntroRoutingModule],
  exports: [FooterIntroComponent],
})
export class FooterIntroModule {}

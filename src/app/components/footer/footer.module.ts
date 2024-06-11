import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, FooterRoutingModule, FontAwesomeModule],
  exports: [FooterComponent],
})
export class FooterModule {}

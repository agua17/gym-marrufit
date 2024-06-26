import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro/intro.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, IntroRoutingModule, MaterialModule],
  exports: [IntroComponent],
})
export class IntroModule {}

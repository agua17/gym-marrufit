import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [InformationComponent],
  imports: [CommonModule, InformationRoutingModule],
  exports: [InformationComponent],
})
export class InformationModule {}

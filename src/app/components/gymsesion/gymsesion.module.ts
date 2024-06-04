import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymsesionRoutingModule } from './gymsesion-routing.module';
import { GymsesionComponent } from './gymsesion/gymsesion.component';

@NgModule({
  declarations: [GymsesionComponent],
  imports: [CommonModule, GymsesionRoutingModule],
  exports: [GymsesionComponent],
})
export class GymsesionModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryPageRoutingModule } from './history-page-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';


@NgModule({
  declarations: [
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    HistoryPageRoutingModule
  ]
})
export class HistoryPageModule { }

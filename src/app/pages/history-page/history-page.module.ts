import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryPageRoutingModule } from './history-page-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { InformationModule } from '../../components/information/information.module';
import { MenuModule } from '../../components/menu/menu.module';

@NgModule({
  declarations: [HistoryPageComponent],
  imports: [
    CommonModule,
    HistoryPageRoutingModule,
    InformationModule,
    MenuModule,
  ],
})
export class HistoryPageModule {}

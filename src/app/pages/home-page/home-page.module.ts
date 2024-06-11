import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuModule } from '../../components/menu/menu.module';
import { IntroModule } from '../../components/intro/intro.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MenuModule,
    IntroModule,
    FooterModule,
  ],
})
export class HomePageModule {}

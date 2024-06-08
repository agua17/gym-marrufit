import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { TimetablePageModule } from './pages/timetable-page/timetable-page.module';
import { HistoryPageModule } from './pages/history-page/history-page.module';
import { ActivitiesPageModule } from './pages/activities-page/activities-page.module';
import { InformationModule } from './components/information/information.module';
import { IntroModule } from './components/intro/intro.module';
import { LoginModule } from './components/login/login.module';
import { MenuModule } from './components/menu/menu.module';
import { TimetableModule } from './components/timetable/timetable.module';
import { GymsesionModule } from './components/gymsesion/gymsesion.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomePageModule,
    LoginPageModule,
    TimetablePageModule,
    HistoryPageModule,
    ActivitiesPageModule,
    InformationModule,
    IntroModule,
    LoginModule,
    MenuModule,
    TimetableModule,
    GymsesionModule,
    InformationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

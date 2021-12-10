import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HazardmapComponent } from './components/hazardmap/hazardmap.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    WeatherComponent,
    HazardmapComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }

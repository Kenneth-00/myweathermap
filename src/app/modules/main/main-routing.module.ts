import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HazardmapComponent } from './components/hazardmap/hazardmap.component';
import { HomeComponent } from './components/home/home.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {
    path: '', component: MainDashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'weather_updt', component: WeatherComponent},
      {path: 'hazardmap', component: HazardmapComponent},
      {path: 'about_us', component: AboutUsComponent},
      {path: '', redirectTo: '/main/home', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { LocationsFilterPipe } from './locations-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    TemperatureComponent,
    TeddyBearComponent,
    LocationsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

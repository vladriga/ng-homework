import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { PlacesFilterPipe } from './places-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    TemperatureComponent,
    TeddyBearComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

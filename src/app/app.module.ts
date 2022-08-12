import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PrimeNG Imports*/
import {InputSwitchModule} from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {KnobModule} from 'primeng/knob';
import {TableModule} from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ImageModule} from 'primeng/image';
import {AvatarModule} from 'primeng/avatar';
import {AccordionModule} from 'primeng/accordion';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';

/* CanvasJS Imports*/
import * as CanvasJSAngularChart from '../assets/canvasjs/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

/* Custom App Components */
import { OccupancyCurveComponent } from './features/occupancy-curve/occupancy-curve.component';
import { RoomUtilisationComponent } from './features/room-utilisation/room-utilisation.component';
import { CurrentOccupationComponent } from './features/current-occupation/current-occupation.component';
import { OccupancyRatesComponent } from './features/occupancy-rates/occupancy-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart,
    OccupancyCurveComponent,
    RoomUtilisationComponent,
    CurrentOccupationComponent,
    OccupancyRatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    KnobModule,
    TableModule,
    PanelMenuModule,
    ImageModule,
    AvatarModule,
    AccordionModule,
    SelectButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

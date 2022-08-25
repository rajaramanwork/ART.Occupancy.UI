import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from '@angular/common';   


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PrimeNG Imports*/
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';

/* SyncFusion */
import { registerLicense } from '@syncfusion/ej2-base';
import { CircularGaugeModule, GaugeTooltipService, LegendService } from '@syncfusion/ej2-angular-circulargauge';
import { VirtualizationService,ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { ToolbarModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';

//registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxIeEx0RWFbb196d1NMY1VBNQtUQF1hS35bd0JjWHpXcnNdT2Za');
registerLicense('Mgo+DSMBaFt/QHJqVVhjWlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9jQX9bdEVjWXxddXdWRg==;Mgo+DSMBPh8sVXJ0S0R+XE9HcFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xTfkRrW39ecHdWQ2RbUQ==;ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1iUX1ecHRWRWVbUEQ=;NzAwMzMwQDMyMzAyZTMyMmUzMFRjbU1LeFJadkhwQS9jeTJOSzl2cEljdW9xQnVFakdvcFYyOENOVmZZTWM9;NzAwMzMxQDMyMzAyZTMyMmUzME9UNnIvbnAzQ01DRzRCNENXNW1VYUdBR2RhL09HNm9tV3JPNXZxT0g0VWs9;NRAiBiAaIQQuGjN/V0Z+Xk9EaFxEVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdEVrWHdccHRVRWNbU0B2;NzAwMzMzQDMyMzAyZTMyMmUzMFc0eFc2Qm5KeitjRzNVdHBXUWd1d2N4b0s2WkpxQ28rR3ZBbWV6UDNXMlk9;NzAwMzM0QDMyMzAyZTMyMmUzMFh0R1FEUCtmVXkxWXF3TmkvbEMzb2NSeW5PODAwc3g0aDBWR3dacjNzbTg9;Mgo+DSMBMAY9C3t2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1iUX1ecHRWRWhZWU0=;NzAwMzM2QDMyMzAyZTMyMmUzMEc0dGNBYlNpaEJ2cjRSM3psR1BXek1mU2hkamZIR1grWXo0OVkva1FJTEU9;NzAwMzM3QDMyMzAyZTMyMmUzMGY4cGR1b2U4S1BLTWRhanlwYUFiWWlmYnl1NjI5N1UrdzNZLzhxRHVYMG89;NzAwMzM4QDMyMzAyZTMyMmUzMFc0eFc2Qm5KeitjRzNVdHBXUWd1d2N4b0s2WkpxQ28rR3ZBbWV6UDNXMlk9')

/* Custom App Components */
import { OccupancyCurveComponent } from './features/occupancy-curve/occupancy-curve.component';
import { OccupancyUtilisationComponent } from './features/occupancy-utilisation/occupancy-utilisation.component';
import { CurrentOccupationComponent } from './features/current-occupation/current-occupation.component';
import { OccupancyRatesComponent } from './features/occupancy-rates/occupancy-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    OccupancyCurveComponent,
    OccupancyUtilisationComponent,
    CurrentOccupationComponent,
    OccupancyRatesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    //Syncfusion
    CircularGaugeModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    SidebarModule,
    ListViewAllModule,
    ToolbarModule,
    DashboardLayoutModule,
    //PrimeNG
    TableModule,
    DropdownModule,
    SelectButtonModule
  ],
  providers: [DatePipe, GaugeTooltipService, LegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

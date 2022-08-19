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

/* SyncFusion */
import { registerLicense } from '@syncfusion/ej2-base';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { GaugeTooltipService, LegendService } from '@syncfusion/ej2-angular-circulargauge';
import {  ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

//registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxIeEx0RWFbb196d1NMY1VBNQtUQF1hS35bd0JjWHpXcnNdT2Za');
registerLicense('Mgo+DSMBaFt/QHJqVVhjWlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9jQX9bdEVjWXxddXdWRg==;Mgo+DSMBPh8sVXJ0S0R+XE9HcFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xTfkRrW39ecHdWQ2RbUQ==;ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1iUX1ecHRWRWVbUEQ=;NzAwMzMwQDMyMzAyZTMyMmUzMFRjbU1LeFJadkhwQS9jeTJOSzl2cEljdW9xQnVFakdvcFYyOENOVmZZTWM9;NzAwMzMxQDMyMzAyZTMyMmUzME9UNnIvbnAzQ01DRzRCNENXNW1VYUdBR2RhL09HNm9tV3JPNXZxT0g0VWs9;NRAiBiAaIQQuGjN/V0Z+Xk9EaFxEVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdEVrWHdccHRVRWNbU0B2;NzAwMzMzQDMyMzAyZTMyMmUzMFc0eFc2Qm5KeitjRzNVdHBXUWd1d2N4b0s2WkpxQ28rR3ZBbWV6UDNXMlk9;NzAwMzM0QDMyMzAyZTMyMmUzMFh0R1FEUCtmVXkxWXF3TmkvbEMzb2NSeW5PODAwc3g0aDBWR3dacjNzbTg9;Mgo+DSMBMAY9C3t2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1iUX1ecHRWRWhZWU0=;NzAwMzM2QDMyMzAyZTMyMmUzMEc0dGNBYlNpaEJ2cjRSM3psR1BXek1mU2hkamZIR1grWXo0OVkva1FJTEU9;NzAwMzM3QDMyMzAyZTMyMmUzMGY4cGR1b2U4S1BLTWRhanlwYUFiWWlmYnl1NjI5N1UrdzNZLzhxRHVYMG89;NzAwMzM4QDMyMzAyZTMyMmUzMFc0eFc2Qm5KeitjRzNVdHBXUWd1d2N4b0s2WkpxQ28rR3ZBbWV6UDNXMlk9')
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

/* Custom App Components */
import { OccupancyCurveComponent } from './features/occupancy-curve/occupancy-curve.component';
import { RoomUtilisationComponent } from './features/room-utilisation/room-utilisation.component';
import { CurrentOccupationComponent } from './features/current-occupation/current-occupation.component';
import { OccupancyRatesComponent } from './features/occupancy-rates/occupancy-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    OccupancyCurveComponent,
    RoomUtilisationComponent,
    CurrentOccupationComponent,
    OccupancyRatesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule,
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
    DropdownModule,
    CircularGaugeModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    SidebarModule
  ],
  providers: [GaugeTooltipService, LegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

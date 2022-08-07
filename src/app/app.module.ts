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

/* Custom App Components */
import { ProductListComponent } from '../app/features/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
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
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

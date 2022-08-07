import { Component, ViewEncapsulation  } from '@angular/core';
import { PrimeNGConfig, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
  visibleSidebar1 : any;
  violationsPerYear: number = 25;
  violationsPerMonth: number = 50;
  violationsPerDay: number = 15;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
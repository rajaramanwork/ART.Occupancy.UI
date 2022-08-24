import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Font } from '@syncfusion/ej2-angular-charts';
import { Zone } from '../shared/zones';

@Component({
  selector: 'occupancy-rates',
  templateUrl: 'occupancy-rates.component.html',
  styleUrls: ['occupancy-rates.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OccupancyRatesComponent implements OnInit {
  public lineStyle: Object;
  public majorTicks: Object;
  public minorTicks: Object;
  public legendSettings: object;
  public tooltip: Object;
  public annotations:any;

  public zones: Zone[];

  public selectedZone: Zone;

  ngOnInit(): void {
   // Initialize objects.
   this.lineStyle = {
    useRangeColor: true
    };
    this.majorTicks = {
        useRangeColor: true
    };
    this.minorTicks = {
        useRangeColor: true
    };
    this.legendSettings= {
        visible: true,
        toggleVisibility: true
    };
    this.tooltip = {
        type:['Pointer', 'Range', 'Annotation'],
        enable: true,
        enableAnimation: false,
        annotationSettings: { template:'<div>CircularGauge</div>' },
        rangeSettings: { fill:'red' }
    };
    this.annotations = [{
        content: 'CircularGauge',
        angle: 180, zIndex: '1',
    }];
    this.zones = [
      {
        name: 'Conference Rooms',
        code: 'Zone 1A'
      },
      {
          name: 'Home Rooms',
          code: 'Zone 2A'
      },
      {
          name: 'Gym',
          code: 'Zone 3A'
      }
    ];
  }
}
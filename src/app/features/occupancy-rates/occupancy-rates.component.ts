import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Font } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'occupancy-rates',
  templateUrl: 'occupancy-rates.component.html',
  styleUrls: ['occupancy-rates.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OccupancyRatesComponent implements OnInit {
  
  public legendSettings: Object = {
    visible: true,
    toggleVisibility: true,
    position: 'Right'
  };;

  public tooltip: Object =  {
    type:['Pointer', 'Range' ],
    enable: true,
    enableAnimation: false,
    rangeSettings: { fill:'red' }
  };
  
  public margin: Object = {
    left: 0, right: 0, top: 0, bottom: 0
  };

  public axisIndex: number = 0;
  public lineStyle1: Object = {
      width: 1.5
  };

  // custom code end
  //Initializing MajorTicks
  public majorTicks1: Object = {
      position: 'Inside',
      width: 2,
      height: 10,
      color: '#843c54'
  };
  public title: string = 'Occupancy Rates';
  //Initializing TitleStyle
  public titleStyle: Object = {
      color: 'gray',
      size: '16px',
      font: { fontweight:'bold' }
  };
  public minorTicks1: Object = {
      position: 'Inside',
      width: 2,
      height: 5,
      color: '#843c54'
  };
  public markerHeight: number = 15;
  public markerWidth: number = 15;
  public labelStyle1: Object = {
      position: 'Inside',
      autoAngle: true,
      hiddenLabel: 'None'
  };
  public cap: Object = { color: 'white', radius: 0, border: { width: 0 } };

  public lineStyle2: Object = { width: 1.5, color: '#E84011' };

  public labelStyle2: Object = {
      position: 'Outside',
      autoAngle: true,
      hiddenLabel: 'None',
      font: { color: '#E84011' }
  };
  public majorTicks2: Object = {
      position: 'Outside',
      width: 2,
      height: 10,
      color: '#E84011'
  };
  public minorTicks2: Object = {
      position: 'Outside',
      width: 2,
      height: 5,
      color: '#E84011'
  };

  public lineStyle3: Object = { width: 1.5, color: '#66cdaa' };

  public labelStyle3: Object = {
      position: 'Outside',
      autoAngle: true,
      hiddenLabel: 'None',
      font: { color: '#E84011' }
  };
  public majorTicks3: Object = {
      position: 'Outside',
      width: 2,
      height: 10,
      color: '#66cdaa'
  };
  public minorTicks3: Object = {
      position: 'Outside',
      width: 2,
      height: 5,
      color: '#66cdaa'
  };
 
  ngOnInit(): void {

  }
}
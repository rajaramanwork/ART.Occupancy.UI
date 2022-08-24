import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { OccupancyCurveService } from './occupancy-curve.service';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'occupancy-curve',
  templateUrl: 'occupancy-curve.component.html',
  styleUrls: ['occupancy-curve.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OccupancyCurveComponent implements OnInit {
  officeDataPoints:Object[] = [];
  restRoomsDataPoints:Object[] = [];

  durationOptions: any[];
  selectedDuration: string = "Today";


  //Initializing Primary X Axis
  public primaryXAxis: Object = {
      valueType: 'Category',
      labelFormat: 'y',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 }
  };

  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
      labelFormat: '{value}',
      rangePadding: 'None',
      minimum: 0,
      maximum: 150,
      interval: 20,
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 },
      minorTickLines: { width: 0 }
  };
  public chartArea: Object = {
      border: {
          width: 0
      }
  };

  public tooltip: Object = {
      enable: true
  };
  // custom code start

  // custom code end
  
  constructor(
    private occupancyCurveService: OccupancyCurveService
  ) {
    
  }

  occupancyCurveOptions = [
    {name: 'Today', value: 1},
    {name: 'Week', value: 2}
  ];

  ngOnInit(): void {
    this.occupancyCurveService.getOccupancyCurves().subscribe(this.loadDataPoints);
    this.durationOptions = [{label: 'Today', value: 'Today'}, {label: 'Week', value: 'Week'}];
  }
 
  ngOnDestroy() {
  }

  loadDataPoints = (data:any) => {
    //console.log("--fetched data-----");
    //console.log(data[0].dataPoints);
    this.officeDataPoints = data[0].dataPoints;
    this.restRoomsDataPoints = data[1].dataPoints;
  }
}
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
  /*public data: Object[] = [
    {"x":8,"y":12},{"x":9,"y":16},{"x":10,"y":22},{"x":11,"y":23},{"x":12,"y":42},{"x":13,"y":15},{"x":14,"y":18},{"x":15,"y":19},{"x":16,"y":12},{"x":17,"y":32},{"x":18,"y":33}
  ];
  public data1: Object[] = [
    {"x":8,"y":16},{"x":9,"y":20},{"x":10,"y":67},{"x":11,"y":46},{"x":12,"y":84},{"x":13,"y":46},{"x":14,"y":46},{"x":15,"y":45},{"x":16,"y":45},{"x":17,"y":37},{"x":18,"y":68}
  ];*/

  officeDataPoints:Object[] = [];
  restRoomsDataPoints:Object[] = [];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
      valueType: 'Category',
      labelFormat: 'y',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 }
  };

  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
      labelFormat: '${value}',
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
  public width: string = '100%';
  public marker: Object = {
      visible: true,
      height: 10,
      width: 10
  };
  public tooltip: Object = {
      enable: true
  };
  // custom code start

  // custom code end
  public title: string = 'Occupancy Curve';
  
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
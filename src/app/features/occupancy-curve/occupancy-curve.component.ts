import { Component, OnInit, Input } from '@angular/core';
import { OccupancyCurveService } from './occupancy-curve.service';

@Component({
  selector: 'occupancy-curve',
  templateUrl: 'occupancy-curve.component.html',
  styleUrls: ['occupancy-curve.component.css']
})
export class OccupancyCurveComponent implements OnInit {

  constructor(
    private occupancyCurveService: OccupancyCurveService
  ) {
    
  }

  occupancyCurveOptions = [
    {name: 'Today', value: 1},
    {name: 'Week', value: 2}
  ];

  officeDataPoints:any[] = [];
  restRoomsDataPoints:any[] = [];

  chart: any;
 
  chartOptions = {
    theme: "light2",
    animationEnabled: true,
    /*title: {
      text: "Live Data"
    },*/
    axisX: {
      intervalType: "hour",
      interval: 1
    },
    axisY: {
      title: "Count"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
    },
    data: [
      {
        type: "line",
        name: "Office",
        color: "orange",
        showInLegend: true,
        dataPoints: this.officeDataPoints
      },
      {
        type: "line",
        name: "RestRooms",
        showInLegend: true,
        dataPoints: this.restRoomsDataPoints
      }
    ]
  }

  ngOnInit(): void {
  }
 
  getChartInstance(chart: object) {
    this.chart = chart;
    this.updateData();
  }
 
  ngOnDestroy() {
  }
 
  updateData = () => {
    this.occupancyCurveService.getOccupancyCurves().subscribe(this.addData)
  }
 
  addData = (data:any) => {
    console.log("--fetched data-----");
    data.forEach( (val:any) => {
      //console.log("----------name---------");
      //console.log(val.name);
      //console.log("----------datapoints---------");
      if (val.name == 'Offices')
      {
        val.dataPoints.forEach( (dataPoint:any)=> {
          this.officeDataPoints.push({x: dataPoint.x, y: dataPoint.y});
        })
      }
      if (val.name == 'restrooms')
      {
        val.dataPoints.forEach( (dataPoint:any)=> {
          this.restRoomsDataPoints.push({x: dataPoint.x, y: dataPoint.y});
        })
      }
    })
    this.chart.render();
  }
}
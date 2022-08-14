import { Component, OnInit, Input } from '@angular/core';
import { OccupancyCurveService } from './occupancy-curve.service';

@Component({
  selector: 'occupancy-curve',
  templateUrl: 'occupancy-curve.component.html',
  styleUrls: ['occupancy-curve.component.css']
})
export class OccupancyCurveComponent implements OnInit {

  occupancyCurveOptions:any;
  chartOptions:any;

  constructor(
    private occupancyCurveService: OccupancyCurveService
  ) 
  { 

  }

  ngOnInit(): void {
    var data = this.occupancyCurveService.getTasks();
    /*this.occupancyCurveService.getTasks().subscribe((result) => {
      console.log("-------fetching data----------")
      console.log(result);*/

    this.occupancyCurveService.getOccupancyCurves().subscribe((result) => {
      console.log("-------fetching occupanycCurves----------")
      console.log(result);

    })

    this.occupancyCurveOptions = [
      {name: 'Today', value: 1},
      {name: 'Week', value: 2}
    ];

    this.chartOptions = {
      animationEnabled: true,
      theme: "light2",
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
        itemclick: function(e: any){
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else{
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type:"line",
        name: "Restrooms",
        showInLegend: true,
        dataPoints: [		
          { x: 8, y: 27 },
          { x: 9, y: 28 },
          { x: 10, y: 35 },
          { x: 11, y: 45 },
          { x: 12, y: 54 },
          { x: 13, y: 23 },
          { x: 14, y: 45 },
          { x: 15, y: 34 },
          { x: 16, y: 23 },
          { x: 17, y: 22 },
          { x: 18, y: 14 },
          { x: 19, y: 12 },
          { x: 20, y: 8 }
        ]
      },
      {
        type: "line",
        name: "Admin Office",
        showInLegend: true,
        dataPoints: [
          { x: 8, y: 27 },
          { x: 9, y: 28 },
          { x: 10, y: 43 },
          { x: 11, y: 45 },
          { x: 12, y: 23 },
          { x: 13, y: 64 },
          { x: 14, y: 23 },
          { x: 15, y: 45 },
          { x: 16, y: 21 },
          { x: 17, y: 5 },
          { x: 18, y: 2 },
          { x: 19, y: 5 },
          { x: 20, y: 6 }
        ]
      }]
    }
  }
}
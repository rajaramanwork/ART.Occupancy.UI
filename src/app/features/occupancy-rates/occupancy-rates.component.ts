import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'occupancy-rates',
  templateUrl: 'occupancy-rates.component.html',
  styleUrls: ['occupancy-rates.component.css']
})
export class OccupancyRatesComponent implements OnInit {
  

  constructor() { }

  // Preparing the chart data
  chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];

  // Chart Configuration
  dataSource = {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
      subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
      xAxisName: "Country", //Set the x-axis name
      yAxisName: "Reserves (MMbbl)", //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion" //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: this.chartData
  };

  
  ngOnInit(): void {

    
  }
}
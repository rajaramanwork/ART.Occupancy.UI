import { Component, ViewEncapsulation  } from '@angular/core';
import { PrimeNGConfig, PrimeIcons } from 'primeng/api';
import {MenuItem} from 'primeng/api';


import { Occupancy } from '././features/Occupancy';
import { Zone } from '././features/zones';
import { Space } from '././features/space';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
  menuItems: MenuItem[] = [
  {
      label: 'Reports',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'Occupancy Yearly', icon: 'pi pi-fw pi-trash'},
          {label: 'Occupancy Monthly', icon: 'pi pi-fw pi-refresh'},
          {label: 'Occupancy Daily', icon: 'pi pi-fw pi-refresh'}
      ]
  },
  {
      label: 'Help',
      icon: 'pi pi-fw pi-question',
      items: [
          {
              label: 'Documents',
              icon: 'pi pi-pi pi-book'
          },
          {
            label: 'Contact',
            icon: 'pi pi-pi pi-phone'
          }
      ]
  },
  {
    label: 'Account',
    icon: 'pi pi-fw pi-user-edit',
    items: [
        {label: 'Logout', icon: 'pi pi-fw pi-trash'},
        {label: 'Profile', icon: 'pi pi-fw pi-user'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ]
  }];
  
  occupancyCurveOptions:any;

  visibleSidebar1 : any;
  violationsPerYear: number = 25;
  violationsPerMonth: number = 50;
  violationsPerDay: number = 15;
  occupancies:Occupancy[] = 
  [
    {
      id: 1,
      location: 'Restrooms',
      zone: 'Zone 1 East',
      currentOccupancy: 12,
      maxOccupancy: 40,
      percentageOfOccupancy: '45%'
    },
    {
      id: 2,
      location: 'Restrooms',
      zone: 'Zone 1 West',
      currentOccupancy: 12,
      maxOccupancy: 40,
      percentageOfOccupancy: '45%'
    },
    {
      id: 3,
      location: 'Library',
      zone: 'Zone 1 East',
      currentOccupancy: 2,
      maxOccupancy: 40,
      percentageOfOccupancy: '4%'
    },{
      id: 4,
      location: 'Library',
      zone: 'Zone 1 South',
      currentOccupancy: 22,
      maxOccupancy: 40,
      percentageOfOccupancy: '60%'
    },
    {
      id: 5,
      location: 'HomeRoom',
      zone: 'Zone 1 East',
      currentOccupancy: 12,
      maxOccupancy: 40,
      percentageOfOccupancy: '30%'
    }
  ];

  spaces:Space[] = 
  [
    {
      name: 'HomeRoom 1',
      timeOccupied: '9%',
      ageTimeOccupied: '3 hr/day'
    },
    {
      name: 'HomeRoom 2',
      timeOccupied: '22%',
      ageTimeOccupied: '1 hr/day'
    },
    {
      name: 'HomeRoom 3',
      timeOccupied: '43%',
      ageTimeOccupied: '5 hr/day'
    },
    {
      name: 'HomeRoom 4',
      timeOccupied: '71%',
      ageTimeOccupied: '3 hr/day'
    },
    {
      name: 'Conf 1',
      timeOccupied: '34%',
      ageTimeOccupied: '1 hr/day'
    },{
      name: 'Conf 2',
      timeOccupied: '51%',
      ageTimeOccupied: '3 hr/day'
    },
    {
      name: 'Conf 3',
      timeOccupied: '21%',
      ageTimeOccupied: '2 hr/day'
    },
    {
      name: 'Conf 4',
      timeOccupied: '22%',
      ageTimeOccupied: '2 hr/day'
    },
  ];

  zones: Zone[] = [
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
  selectedZone : any;

  chartOptions = {
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

    
			  
  };
  constructor(private primengConfig: PrimeNGConfig) {
      this.occupancyCurveOptions = [
          {name: 'Today', value: 1},
          {name: 'Week', value: 2}
      ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
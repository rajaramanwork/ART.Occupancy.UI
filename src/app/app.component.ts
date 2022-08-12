import { Component, ViewEncapsulation  } from '@angular/core';
import { PrimeNGConfig, PrimeIcons } from 'primeng/api';
import {MenuItem} from 'primeng/api';


import { Occupancy } from '././features/Occupancy';

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

  
 

  constructor(private primengConfig: PrimeNGConfig) {
      
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
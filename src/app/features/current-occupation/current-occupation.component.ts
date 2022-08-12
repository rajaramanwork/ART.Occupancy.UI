import { Component, OnInit, Input } from '@angular/core';
import { Occupancy } from './Occupancy';

@Component({
  selector: 'current-occupation',
  templateUrl: 'current-occupation.component.html',
  styleUrls: ['current-occupation.component.css']
})
export class CurrentOccupationComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {

    
  }
}
import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

import { Space } from './space';
import { Zone } from './zones';

@Component({
  selector: 'room-utilisation',
  templateUrl: 'room-utilisation.component.html',
  styleUrls: ['room-utilisation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomUtilisationComponent implements OnInit {
  selectedZone : any;
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


  constructor() { 
   
  }

  ngOnInit(): void {
  }
}
import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { OccupancyUtlisationService } from './occupancy-utilisation.service';
import { Space } from './space';
import { Zone } from '../shared/zones';

@Component({
  selector: 'occupancy-utilisation',
  templateUrl: 'occupancy-utilisation.component.html',
  styleUrls: ['occupancy-utilisation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OccupancyUtilisationComponent implements OnInit {
  public lineStyle: Object;
  public majorTicks: Object;
  public minorTicks: Object;
  public legendSettings: object;
  public tooltip: Object;
  public annotations:any;
  public selectedZone: Zone;

  public zones: Zone[];
  public occupancyRate: any;


  /*selectedZone : any;
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
  ];*/


  constructor(private occupancyUtilisationService: OccupancyUtlisationService) { 
   
  }

  ngOnInit(): void {
    this.lineStyle = {
      useRangeColor: true
      };
      this.majorTicks = {
          useRangeColor: true
      };
      this.minorTicks = {
          useRangeColor: true
      };
      this.legendSettings= {
          visible: true,
          toggleVisibility: true
      };
      this.tooltip = {
          type:['Pointer', 'Range', 'Annotation'],
          enable: true,
          enableAnimation: false,
          annotationSettings: { template:'<div>CircularGauge</div>' },
          rangeSettings: { fill:'red' }
      };
      this.annotations = [{
          content: 'CircularGauge',
          angle: 180, zIndex: '1',
      }];
      this.zones = [
        {
          name: 'Conference Rooms',
          code: 'conf room'
        },
        {
            name: 'Class Room 101',
            code: 'Class Room 101'
        },
        {
            name: 'Admin Office',
            code: 'admin office'
        }
      ];
      var zone = "conf room";
      this.occupancyUtilisationService.getOccupancyUtilisation(zone).subscribe(this.loadData);
  }

  loadData = (data:any) => {
    //console.log("----fetched data-----");
    //console.log(this.selectedZone.name);
    //console.log(this.selectedZone.code);
    this.occupancyRate = data.rate;
  }

  
  onZoneChange(event:any) {
    //console.log('event :' + event);
    //console.log(event.value);
    this.occupancyUtilisationService.getOccupancyUtilisation(event.value).subscribe(this.loadData);
  }
}
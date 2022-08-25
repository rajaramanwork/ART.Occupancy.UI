import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CurrentOccupancy } from './CurrentOccupancy';
import { CurrentOccupancyService } from './current-occupancy.service';


@Component({
  selector: 'current-occupation',
  templateUrl: 'current-occupation.component.html',
  styleUrls: ['current-occupation.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CurrentOccupationComponent implements OnInit {
  
  constructor(private currentOccupancyService: CurrentOccupancyService) { }

  currentOccupancies:any[] = []; 


  ngOnInit(): void {
    this.currentOccupancyService.getCurrentOccupancy()
    .subscribe(currentOccupancies => {
        this.currentOccupancies = currentOccupancies as CurrentOccupancy[]
    })

  }
}
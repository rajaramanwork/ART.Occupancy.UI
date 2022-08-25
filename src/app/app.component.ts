import { Component, ViewEncapsulation,ViewChild  } from '@angular/core';
import { SidebarComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
  @ViewChild('dockBar') dockBar: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '205px';
  public dockSize: string = '70px';
  public cellSpacing: number[] = [10, 10];
  public currentDateTime : DatePipe;
  public formattedDateTime : any;
  toggleClick() {
      this.dockBar.toggle();
  }
  constructor(public datepipe: DatePipe) {
      
  }

  ngOnInit() {
    let myDate = new Date(); 
    this.formattedDateTime = this.datepipe.transform(myDate, 'dd-MMM-YYYY HH:mm:ss a');
  }
}
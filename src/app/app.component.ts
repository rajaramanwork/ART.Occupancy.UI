import { Component, ViewEncapsulation,ViewChild  } from '@angular/core';
import { SidebarComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';


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
  toggleClick() {
      this.dockBar.toggle();
  }
  constructor() {
      
  }

  ngOnInit() {
  }
}
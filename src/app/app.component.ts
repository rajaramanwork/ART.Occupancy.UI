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
  public width: string = '220px';
  public dockSize: string = '72px';
  public cellSpacing: number[] = [10, 10];
  toggleClick() {
      this.dockBar.toggle();
  }

  public dashboardObject: DashboardLayoutComponent;
  public count: number = 5;
  public panelsData: PanelModel[] = [{
      'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0, header: '<div>Panel 1</div>'
  },
  {
      'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 2, header: '<div>Panel 2</div>'
  },
  {
      'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 4, header: '<div>Panel 3</div>'
  },
  {
      'sizeX': 4, 'sizeY': 2, 'row': 2, 'col': 0, header: '<div>Panel 4</div>'
  },
  {
      'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 4, header: '<div>Panel 5</div>'
  }];
  public headerCount: number = 1;
  
  constructor() {
      
  }

  ngOnInit() {
  }
}
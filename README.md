# ARTOccupancyUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Code Snippets
=============
Integrating Http Services : https://www.positronx.io/angular-service-tutorial-with-example/

Sample Services 
https://dummyjson.com/

Installs - SyncFusion  
========================================================
npm install @syncfusion/ej2 --save
npm install @syncfusion/ej2-angular-navigations --save

npm install @syncfusion/ej2-angular-buttons --save
npm install @syncfusion/ej2-angular-lists --save
npm install @syncfusion/ej2-angular-inputs --save
npm install @syncfusion/ej2-angular-dropdowns --save
npm install @syncfusion/ej2-angular-layouts --save

Installs - PrimeNG  
========================================================
npm install primeng --save
npm install primeicons --save

Deploying to IIS 
=================
//for localhost 
ng build --base-href 

//for Prod 
ng build --base-href /Occupancy/

IIS_IUSRS to Application Folder 
Added web.config 

Install URL Rewrite Module 
-------------------------
Download from https://www.iis.net/downloads/microsoft/url-rewrite
Changed MajorVersion to 9 
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\InetStp
Install UrlRewrite 
Changed MajorVersion to 10 
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\InetStp

Refer : https://indepth.dev/posts/1239/deploy-an-angular-application-to-iis


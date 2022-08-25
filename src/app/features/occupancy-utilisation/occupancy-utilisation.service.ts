import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class OccupancyUtlisationService {
  //apiUrl: string = 'https://dummyjson.com/products/1';
  apiUrl: string = 'http://localhost:64666/Occupancy';  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {

  }


  getOccupancyUtilisation(zone:any) : Observable<any>{
    console.log("invoking getOccupancyUtilisation()");
    //http://localhost:64666/Occupancy/GetOccupancyUtilisation/08-13-2022'
    //return this.httpClient.get(this.apiUrl + '/GetOccupancyUtilisation/" + "08-13-2022')
    //zone = "home room 1A";
    return this.httpClient.get('http://localhost:64666/Occupancy/GetOccupancyUtilisation/' + zone+ '/08-13-2022')
    .pipe(map((resp: any) => resp),
      catchError(error => this.error(error))
    )
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
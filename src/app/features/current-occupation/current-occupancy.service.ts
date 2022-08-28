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

export class CurrentOccupancyService {
  //apiUrl: string = 'https://dummyjson.com/products/1';
  apiUrl: string = 'http://ec2amaz-i4q5kgj:5050/Occupancy';  
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) {

  }


  getCurrentOccupancy() : Observable<any>{
    console.log("invoking getCurrentOccupancy()");
    return this.httpClient.get(this.apiUrl + '/getCurrentOccupancy/08-13-2022')
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
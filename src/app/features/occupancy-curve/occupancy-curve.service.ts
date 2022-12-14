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

export class OccupancyCurveService {
  //apiUrl: string = 'https://dummyjson.com/products/1';
  apiUrl: string = 'http://ec2amaz-i4q5kgj:5050/Occupancy';  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  /*
  .set('Access-Control-Allow-Origin', 'http://172.31.91.8:64666')
    .set('AAccess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('ccess-Control-Allow-Credentials', 'true')
  */ 

  constructor(private httpClient: HttpClient) {

  }

  // Read
  getTasks() {
    console.log("invoking getTasks()");
    return this.httpClient.get(this.apiUrl);
  }

  // Read
  /*getOccupancyCurves(){
    console.log("invoking getOccupancyCurves()");
    return this.http.get(this.apiUrl + '/GetOccupancyCurve/08-13-2022');
  }*/

  getOccupancyCurves() : Observable<any>{
    console.log("invoking getOccupancyCurves()");
    return this.httpClient.get(this.apiUrl + '/GetOccupancyCurve/08-13-2022')
    .pipe(map((resp: any) => resp),
      catchError(error => this.error(error))
    )
  }

  /*
  // Create
  createTask(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/create-task`;
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }
  
  // Update
  updateTask(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.error));
  }
  
  // Delete
  deleteTask(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.error));
  }*/
  
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
import { Injectable } from '@angular/core';
import { Summary } from './summary';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  summaryUrl = 'assets/summary.json'
  constructor(private http:HttpClient) { }

  getStoreSummary(): Observable<Summary[]>{
    return this.http.get<any[]>(this.summaryUrl).pipe(catchError(this.handleError));
  }
  
  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}

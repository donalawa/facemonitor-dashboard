import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

// import { MonthlySales } from './monthly-sales';

@Injectable({
  providedIn: 'root'
})

export class SalesService {
  private salesUrl = 'assets/sales.json';

  constructor(private http: HttpClient,private firestore: AngularFirestore) { }

  getSalesByMonth(): Observable<any[]>{
    return this.http.get<any[]>(this.salesUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}
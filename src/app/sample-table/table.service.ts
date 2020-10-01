import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Table } from './table'
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore'

// import { MonthlySales } from './monthly-sales';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  private tableUrl = 'assets/table_data.json';

  constructor(private http: HttpClient,private db: AngularFireDatabase,private fireStore:AngularFirestore) { }

  getMonitorData(): Observable<any[]>{
    return this.http.get<any[]>(this.tableUrl).pipe(catchError(this.handleError));
  }

  getRealtimeData(){
    return this.fireStore.collection('FaceApiMonitor').valueChanges()
    // return db.ref
  }
  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}
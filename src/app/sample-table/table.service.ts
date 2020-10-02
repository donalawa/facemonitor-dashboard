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

  constructor(private afs: AngularFirestore) { }

  // getMonitorData(): Observable<any[]>{
  //   return this.http.get<any[]>(this.tableUrl).pipe(catchError(this.handleError));
  // }

  getRealtimeData(){
    return this.afs.collection('FaceApiMonitor').valueChanges()
    // return db.ref
  }

  getTableData() {
    return this.afs.collection('FaceApiMonitor', ref => ref.orderBy('fullDate','desc')).valueChanges();
  }
  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`); 
  }
}
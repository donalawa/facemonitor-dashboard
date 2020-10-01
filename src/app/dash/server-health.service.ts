import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { tap,catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServerHealthService {

  constructor(private http:HttpClient) { }

  checkSeverHealth():Observable<any>{
   return  this.http.get("http://163.172.139.120")
    .pipe( )
  }
}

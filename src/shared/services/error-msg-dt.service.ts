import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {ErrorMsgDT} from '../models/ErrorMsgDT.model';
import {catchError, retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorMsgDTService {

  constructor(public http: HttpClient) {
    this.http = http;
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private refreshNeeded$ = new Subject<void>();

  get refreshNeeded(){
    return this.refreshNeeded$;
  }

  displayDownTimeErrorMsg(data): Observable<ErrorMsgDT> {
    return this.http.post<ErrorMsgDT>('http://localhost:8080/downtime/save', JSON.stringify(data), this.httpOptions)
      .pipe(
        tap(() => {
          this.refreshNeeded$.next();
        }),
        retry(1),
        catchError(this.errorHandl)
      );
  }

  public getAllErrorMsgs(): Observable<ErrorMsgDT> {
    return this.http.get<ErrorMsgDT>('http://localhost:8080/downtime/errorMsgs')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import $ from 'jquery';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<any[]> {
    return this.httpClient.get<any[]>('api/menu').pipe(
      tap(_ => console.log('rxjs tapppp!!!!!')),
      catchError(_ => {
        console.log('rxjs catchError!!!!!!');
        return of([]);
      })
    );
  }

  sendAsync(url: string, method: string, data: Object): Promise<{}> {

    console.log(url + ' 上送rq: ' + JSON.stringify(data));
    url = `http://127.0.0.1:8769/chat${url}`;
    data = method === 'GET' ? data : JSON.stringify(data);

    const test = this.httpClient.get<any[]>(url);

    console.log(test);
    test.pipe(
      tap(_ => console.log('rxjs tapppp!!!!!')),
      catchError(_ => {
        console.log('rxjs catchError!!!!!!');
        return of([]);
      })
    );


    return new Promise<{}>((result, reject) => {
      // $.ajax({
      //   url: url,
      //   type: method,
      //   contentType: 'application/json; charset=utf-8',
      //   data: data,
      //   success: data => {
      //     console.log(data);
      //     result(data);
      //   },
      //   error: err => reject(err),
      // });
    });
  }
}

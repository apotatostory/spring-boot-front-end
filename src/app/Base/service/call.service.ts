import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  apiUrl = 'api/menu';
  constructor(private httpClient: HttpClient) { }

  public getMenu(): Observable<any[]> {
    return this.sendAsync(this.apiUrl, 'GET', null);
  }

  public sendAsync(url: string, method: string, data: Object): Observable<any> {
    console.log(`${url} ${method}上送rq: ${data}`);

    const func = {
      'GET': () => {
        return this.httpClient.get<any>(`http://127.0.0.1:8769/chat${url}`)
          .pipe(
            tap((next) => console.log(`${url} GET接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'POST': () => {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.post<any>(`http://127.0.0.1:8769/chat${url}`, data, httpOptions)
          .pipe(
            tap((next) => console.log(`${url} POST接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'PUT': () => {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.put<any>(`http://127.0.0.1:8769/chat${url}`, data, httpOptions)
          .pipe(
            tap((next) => console.log(`${url} PUT接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'DELETE': () => {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.delete<any>(`http://127.0.0.1:8769/chat${url}`, httpOptions)
          .pipe(
            tap((next) => console.log(`${url} DELETE接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'nothing': () => {
        console.log(`${method} 沒有這個方法!!`);
        return new Observable();
      }
    };

    return func[method] ? func[method]() : func['nothing']();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InjectService } from '../service/inject.service';

@Component({})
export abstract class BasePageComponent implements OnInit, OnChanges, OnDestroy {

  private apiUrl = 'api/menu';

  protected task = '';
  protected abstract title: string;

  constructor(private httpClient?: HttpClient, private router?: Router) { }

  ngOnInit() {
    console.log(this.title, 'init...');
    // this.httpClient = InjectService.injector.get(HttpClient);
    // this.router = InjectService.injector.get(Router);
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title, 'onChange...');
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        const to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          console.log(this.title, `Initial propName: ${propName}, value: ${to}`);
        } else {
          const from = JSON.stringify(changedProp.previousValue);
          console.log(this.title, `propName: ${propName} changed value from ${from}, to ${to}`);
        }
      }
    }
    if (this.onChange) { this.onChange(changes); }
  }

  ngOnDestroy() {
    this.onDestroy();
  }

  /**
   * init
   */
  protected abstract init(data?: any): void;

  protected onChange(changes?: SimpleChanges): void { }

  protected onDestroy(): void { }

  /**
   *  send a async request to server
   * @param url
   * @param method
   * @param data
   */
  sendAsync(url: string, method: string, data: any): Observable<any> {
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

  // 同步 (未完成)
  nextPage(url: string, data: any, invoke: boolean): void {
    if (invoke) {
      this.sendAsync(url, 'POST', data);
    } else {
      this.router.navigate([url]);
    }
  }

  public getMenu(): Observable<any[]> {
    return this.sendAsync(this.apiUrl, 'GET', null);
  }

  /**
   * Handle all error
   * @param operation - name of the operation
   * @param result - default value (nullable)
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { InjectService } from '../service/inject.service';

import { PopupComponent } from './popup/popup.component';







export abstract class BasePageComponent implements OnInit, OnChanges, OnDestroy {

  protected task = '';
  protected abstract title: string;
  private rootUrl = 'http://127.0.0.1:8769';

  ngOnInit() {
    console.log(this.title, 'init...');
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

    const httpClient = InjectService.injector.get(HttpClient);
    const func = {
      'GET': () => {
        return httpClient.get<any>(`${this.rootUrl}/chat${url}`)
          .pipe(
            tap((next) => console.log(`${url} GET接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'POST': () => {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return httpClient.post<any>(`${this.rootUrl}/chat${url}`, data, httpOptions)
          .pipe(
            tap((next) => console.log(`${url} POST接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'PUT': () => {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return httpClient.put<any>(`${this.rootUrl}/chat${url}`, data, httpOptions)
          .pipe(
            tap((next) => console.log(`${url} PUT接收rs`, next)),
            catchError(this.handleError(url, {}))
          );
      },

      'DELETE': () => {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return httpClient.delete<any>(`${this.rootUrl}/chat${url}`, httpOptions)
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
    const router = InjectService.injector.get(Router);

    if (invoke) {
      this.sendAsync(url, 'POST', data);
    } else {
      router.navigate([url]);
    }
  }

  public getMenu(): Observable<any[]> {
    return this.sendAsync('/menu/get', 'GET', null);
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

  alert(content: string) {
    console.log(this.title, 'alert');

    const dialog = InjectService.injector.get(MatDialog);
    const dialogRef = dialog.open(PopupComponent, {
      width: '250px',
      data: { title: this.title, content: content }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });

    // const component: NgElement & WithProperties<any> = document.createElement('app-alert') as any;
    // document.body.firstElementChild.firstElementChild.children[1].children[1].appendChild(component);


  }

  /**
   * 爬券商進出網頁
   * @param method
   */
  protected webCrawler(brokerVo: any): Observable<any> {
    const httpClient = InjectService.injector.get(HttpClient);
    const { brokerId, branchId, type, sDate, eDate } = brokerVo;
    // console.log(`/z/zg/zgb/zgb0.djhtm?a=${brokerId}&b=${branchId}&c=${type}&e=${sDate}&f=${eDate}`);

    return httpClient
      .get(`/z/zg/zgb/zgb0.djhtm?a=${brokerId}&b=${branchId}&c=${type}&e=${sDate}&f=${eDate}`, {
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        tap((next) => next['branchId'] = branchId),
        catchError(this.handleError('webCrawler', {}))
      );
  }

}

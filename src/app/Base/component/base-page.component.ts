import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CallService } from '../service/call.service';
import { InjectService } from '../service/inject.service';

export abstract class BasePageComponent implements OnInit {

  title = '';


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.init();
  }

  /**
   * init
   */
  abstract init(data?: any): void;

  /**
   *  send a async request to server
   * @param url
   * @param method
   * @param data
   */
  sendAsync(url: string, method: string, data: any): Observable<any> {
    return InjectService.injector.get(CallService).sendAsync(url, method, data);
  }

  // 同步 (未完成)
  nextPage(url: string, data: any, invoke: boolean): void {
    if (invoke) {
      this.sendAsync(url, 'POST', data);
    } else {
      
    }
  }

}

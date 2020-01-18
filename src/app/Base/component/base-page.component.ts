import { OnInit } from '@angular/core';
import $ from 'jquery';
import { CacheService } from '../service/cache.service';
import { InjectService } from '../service/inject.service';
import { CallService } from '../service/call.service';


export abstract class BasePageComponent implements OnInit {

  constructor() { }

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
  sendAsync(url: string, method: string, data: Object): Promise<{}> {
    return InjectService.injector.get(CallService).sendAsync(url, method, data);
  }

  // 同步 (未完成)
  nextPage() {
    // this.sendAsync()
  }

}

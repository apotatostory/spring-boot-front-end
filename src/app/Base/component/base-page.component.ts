import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CallService } from '../service/call.service';
import { InjectService } from '../service/inject.service';

export abstract class BasePageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.init();
  }

  /**
   * init
   */
  abstract init(data?: any): void;


  getMenu() {
    const result = InjectService.injector.get(CallService).getMenu();
    result.subscribe(x => console.log(x));
    console.log(result);
    // return result;
  }
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

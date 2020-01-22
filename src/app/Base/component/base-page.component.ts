import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CallService } from '../service/call.service';
import { InjectService } from '../service/inject.service';
import { Observable } from 'rxjs';

export abstract class BasePageComponent implements OnInit {

  title = '';
  menuList = [];


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.init();
  }

  /**
   * init
   */
  abstract init(data?: any): void;


  getMenu(): void {
    InjectService.injector.get(CallService).getMenu().subscribe(menus => this.menuList = menus);
  }
  /**
   *  send a async request to server
   * @param url
   * @param method
   * @param data
   */
  sendAsync(url: string, method: string, data: Object): Observable<any> {
    return InjectService.injector.get(CallService).sendAsync(url, method, data);
  }

  // 同步 (未完成)
  nextPage() {
    // this.sendAsync()
  }

}

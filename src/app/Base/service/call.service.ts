import { Injectable } from '@angular/core';
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor() { }

  sendAsync(url: string, method: string, data: Object): Promise<{}> {

    console.log(url + ' 上送rq: ' + JSON.stringify(data));
    url = 'http://127.0.0.1:8769/chat' + url;
    data = method === 'GET' ? data : JSON.stringify(data);

    return new Promise<{}>((result, reject) => {
      $.ajax({
        url: url,
        type: method,
        contentType: 'application/json; charset=utf-8',
        data: data,
        success: data => {
          console.log(data);
          result(data);
        },
        error: err => reject(err),
      });
    });
  }
}

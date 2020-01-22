import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { BasePageComponent } from 'src/app/Base/component/base-page.component';

@Component({
  selector: 'app-buy00001',
  templateUrl: './buy00001.component.html',
  styleUrls: ['./buy00001.component.css']
})
export class Buy00001Component extends BasePageComponent {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  init(data?: any): void {
    console.log('342343242');
  }

}

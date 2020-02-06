import { Component, OnInit, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { BasePageComponent } from 'src/app/Base/component/base-page.component';

@Component({
  selector: 'app-buy00002',
  templateUrl: './buy00002.component.html',
  styleUrls: ['./buy00002.component.css']
})
export class Buy00002Component extends BasePageComponent {

  title = 'Buy00002';

  @Input() name: string;

  init(data?: any): void {

  }


}

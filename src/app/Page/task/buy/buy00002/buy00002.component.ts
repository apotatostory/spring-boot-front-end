import { Component, OnInit, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { BasePageComponent } from 'src/app/Base/component/base-page.component';

@Component({
  selector: 'app-buy00002',
  templateUrl: './buy00002.component.html',
  styleUrls: ['./buy00002.component.css']
})
export class Buy00002Component extends BasePageComponent {
  // private _name: string;
  @Input() name: string;

  // @Input() set name(name: string) {
  //   console.log('set name:', name);
  //   this._name = name && name.toUpperCase();
  // }

  // get name(): string {
  //   return this._name;
  // }

  init(data?: any): void {

  }


}

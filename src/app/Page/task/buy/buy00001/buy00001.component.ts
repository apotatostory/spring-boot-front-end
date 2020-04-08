import { HttpResponse } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { BasePageComponent } from 'src/app/Base/component/base-page.component';
import { DynamicLoaderDirective } from 'src/app/Base/directive/dynamic-loader.directive';

import { Buy00002Component } from '../buy00002/buy00002.component';
import { Sell00001Component } from '../../sell/sell00001/sell00001.component';
import { Sample } from './../../../../Base/model/sample';









@Component({
  selector: 'app-buy00001',
  templateUrl: './buy00001.component.html',
  styleUrls: ['./buy00001.component.css']
})
export class Buy00001Component extends BasePageComponent {

  title = 'Buy00001';
  inputtxt: string;
  components = [
    new Sample(Buy00002Component, this.inputtxt),
    new Sample(Sell00001Component, null)];
  index = 0;
  brokerMap: {};

  @ViewChild(DynamicLoaderDirective, { static: true }) appDynamicLoader: DynamicLoaderDirective;

  constructor(private componentFactory: ComponentFactoryResolver) {
    super();
  }

  init(data?: any): void {
    // setInterval(() => {
    this.loadComponent();
    // }, 1000);
  }

  showPopup() {
    this.sendAsync('/broker/get', 'GET', null).subscribe(x => this.brokerMap = x['brokerMap']);

    // this.alert('showPopup');
  }

  doWebCrawler() {

    const now = new Date();
    const sDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() - 1}`;
    const sDate2 = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() - 2}`;
    const sDate3 = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() - 3}`;
    const sDates: any[] = [sDate, sDate2, sDate3];

    for (let i = 0; i < sDates.length; i++) {
      const d = sDates[i];
      const aa = () => Object.values(this.brokerMap).forEach((key: []) => {
        // 測試
        // const key = this.brokerMap['6010'];
        for (const vo of key) {

          const bb = () => this.webCrawler({
            brokerId: vo['brokerId'],
            branchId: vo['branchId'],
            type: 'E',
            sDate: d,
            eDate: d
          }).subscribe((res: HttpResponse<any>) => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(res.body, 'text/html');
            const body = htmlDoc.body.innerHTML;

            if (!body) {
              console.warn({
                brokerId: vo['brokerId'],
                branchId: vo['branchId'],
                type: 'E',
                sDate: d,
                eDate: d
              });
              return;
            }
            this.sendAsync('/crawler/exe', 'POST', {
              body: body,
              branchId: vo['branchId'],
              date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - i + 1)
            })
              .subscribe(x => console.log(x));
          });

          setTimeout(bb, 5000);
        }
      });

      aa();
    }
  }

  loadComponent() {
    const item = this.components[this.index++ % this.components.length];
    const componentFactory = this.componentFactory.resolveComponentFactory(item.name);

    this.appDynamicLoader.viewContainerRef.clear();

    const dynamicComponend = this.appDynamicLoader.viewContainerRef.createComponent(componentFactory);
    (<Buy00002Component>dynamicComponend.instance).name = `${'dynamicComponend'} ${this.inputtxt}`;

  }

}

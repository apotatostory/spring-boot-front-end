import { Sample } from './../../../../Base/model/sample';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';
import { DynamicLoaderDirective } from 'src/app/Base/directive/dynamic-loader.directive';
import { Sell00001Component } from '../../sell/sell00001/sell00001.component';
import { Buy00002Component } from '../buy00002/buy00002.component';


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
    document.createElement('');
  }

  loadComponent() {
    const item = this.components[this.index++ % this.components.length];
    const componentFactory = this.componentFactory.resolveComponentFactory(item.name);

    this.appDynamicLoader.viewContainerRef.clear();

    const dynamicComponend = this.appDynamicLoader.viewContainerRef.createComponent(componentFactory);
    (<Buy00002Component>dynamicComponend.instance).name = `${'dynamicComponend'} ${this.inputtxt}`;

  }

}

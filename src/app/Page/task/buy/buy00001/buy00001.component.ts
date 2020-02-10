import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';
import { DynamicLoaderDirective } from 'src/app/Base/directive/dynamic-loader.directive';
import { Buy00002Component } from '../buy00002/buy00002.component';


@Component({
  selector: 'app-buy00001',
  templateUrl: './buy00001.component.html',
  styleUrls: ['./buy00001.component.css']
})
export class Buy00001Component extends BasePageComponent {

  title = 'Buy00001';
  inputtxt: string;

  @ViewChild('DynamicLoaderDirective') appDynamicLoader: DynamicLoaderDirective;

  constructor(private componentFactory: ComponentFactoryResolver) {
    super();
  }

  init(data?: any): void {
    const componentFactory = this.componentFactory.resolveComponentFactory(Buy00002Component);
    this.appDynamicLoader.viewContainerRef.clear();
    this.appDynamicLoader.viewContainerRef.createComponent(componentFactory);
  }

}

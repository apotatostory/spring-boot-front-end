import { Directive, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDynamicLoader]'
})
export class DynamicLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log('DynamicLoaderDirective', viewContainerRef);
  }

}

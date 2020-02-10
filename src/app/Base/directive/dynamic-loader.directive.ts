import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicLoader]'
})
export class DynamicLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef ) { }

}

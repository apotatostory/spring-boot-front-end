import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './Base/component/popup/popup.component';
import { Buy00002Component } from './Page/task/buy/buy00002/buy00002.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  constructor(private injector: Injector) {
    customElements.define('app-alert', createCustomElement(PopupComponent, { injector }));
    customElements.define('app-alert1', createCustomElement(Buy00002Component, { injector }));
  }
}

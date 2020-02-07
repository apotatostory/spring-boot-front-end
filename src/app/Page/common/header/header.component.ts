import { Component } from '@angular/core';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BasePageComponent {

  title = 'Header';

  menuList: any[];

  init(data?: any): void {
    this.getMenu().subscribe(menus => this.menuList = menus);
  }

  menuClick(menu: any, e: any): void {
    console.log('menuClick......');
    console.log('e', e);
    this.nextPage(menu.task, {}, false);
  }

}

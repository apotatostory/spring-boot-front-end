import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BasePageComponent } from 'src/app/Base/component/base-page.component';
import { InjectService } from 'src/app/Base/service/inject.service';
import { CallService } from 'src/app/Base/service/call.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BasePageComponent {

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

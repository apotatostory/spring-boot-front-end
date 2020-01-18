import { Component } from '@angular/core';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BasePageComponent {

  menuList: any[];

  init(data?: any): void {
    this.sendAsync('/menu/get', 'GET', {}).then((data: any[]) => {
      this.menuList = data;
    }).catch(e => {
      console.log(e);
    });
  }

  menuClick(e: any): void {
    console.log('menuClick......');
  }

}

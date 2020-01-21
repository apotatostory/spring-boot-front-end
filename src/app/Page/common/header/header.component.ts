import { Component } from '@angular/core';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BasePageComponent {

  menuList: any[];

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  init(data?: any): void {

    super.getMenu();

    // this.sendAsync('/menu/get', 'GET', {}).then((data: any[]) => {
    //   this.menuList = data;
    // }).catch(e => {
    //   console.log(e);
    // });
  }

  menuClick(e: any): void {
    console.log('menuClick......');
  }

}

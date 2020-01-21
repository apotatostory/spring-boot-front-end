import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BasePageComponent {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  init(data?: any): void {
  }


}

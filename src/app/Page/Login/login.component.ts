import { Component } from '@angular/core';
import { BasePageComponent } from '../../Base/base-page/base-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasePageComponent {

  userID: string;
  pwd: string;

  init(page): void {
    console.log('LoginComponent init...');
  }

  doRegister(e): void {
    console.log('doRegister...');
  }

  doSignIn(e): void {
    console.log('doSignIn...');
  }

}


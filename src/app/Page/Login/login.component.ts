import { Component } from '@angular/core';
import { BasePageComponent } from '../../Base/component/base-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasePageComponent {

  title = 'Login';
  userID: string;
  pwd: string;

  init(page): void {
    this.userID = 'A117107506';
  }

  doRegister(e): void {
    console.log(e);
    console.log('doRegister...');
  }

  doSignIn(e): void {
    console.log('doSignIn...');
  }

}


import { Component, Input, SimpleChanges } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent extends BasePageComponent {

  private intervalId: NodeJS.Timeout;
  private message: string;
  private second: number;

  @Input() initSecond = 10;

  init() {
    this.start();
    this.onChange = this.start.bind(this);
  }

  start() {
    clearInterval(this.intervalId);

    this.second = this.initSecond;
    this.intervalId = setInterval(() => {
      if (this.second <= 0) {
        this.message = '計時結束';
      } else {
        this.message = `剩餘時間: ${this.second--}s`;
      }
    }, 1000);
  }

  stop() {

  }

}

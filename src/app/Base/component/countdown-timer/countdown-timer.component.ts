import { Component, Input, EventEmitter } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent extends BasePageComponent {

  intervalId: NodeJS.Timeout;
  message: string;
  second: number;
  title = 'CountdownTimer';

  @Input() initSecond = 10;

  init() {
    this.start();
  }

  onChange(changes) {
    this.start();
  }

  onDestroy() {
    clearInterval(this.intervalId);
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

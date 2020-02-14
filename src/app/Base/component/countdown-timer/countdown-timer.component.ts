import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {

  intervalId: NodeJS.Timeout;
  message: string;
  second: number;
  title = 'CountdownTimer';

  @Input() initSecond = 10;

  ngOnChanges(changes: SimpleChanges): void {
    this.start();
  }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
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

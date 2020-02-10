import { Component } from '@angular/core';
import { BasePageComponent } from 'src/app/Base/component/base-page.component';
import { MissionService } from './../../../../Base/service/mission.service';

@Component({
  selector: 'app-sell00001',
  templateUrl: './sell00001.component.html',
  styleUrls: ['./sell00001.component.css'],
})
export class Sell00001Component extends BasePageComponent {

  title = 'Sell00001';
  people = ['AAA', 'BBB', 'CCC'];
  mission = ['走走', '跑跑', '跳跳'];
  missionIdx = 0;

  constructor(private missionService: MissionService) {
    super();
    missionService.missionConfirmed$.subscribe(x => {
      console.log(`${x} is good`);
    });
  }

  init(data?: any): void {
  }

  doAction(): void {
    console.log('doAction');
    this.missionService.announceMission(this.mission[this.missionIdx++ % this.mission.length]);
  }

}

import { Component, Input } from '@angular/core';
import { MissionService } from '../../service/mission.service';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.css'],
})
export class EmitComponent extends BasePageComponent {

  title = 'EmitComponent';
  mission = '無所事事三人組';

  @Input() person: string;

  constructor(private missionService: MissionService) {
    super();
    this.missionService.missionAnnounced$.subscribe(x => {
      console.log(this.person, x);
      this.mission = x;
    });
  }

  protected init(data?: any): void { }

  confirm() {
    console.log('confirm');
    this.missionService.confirmMission(this.person);
  }

}

import { Component, OnInit } from '@angular/core';
import {TeamMember} from "src/app/team/interfaces/team-member";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  team: TeamMember[] = [{imagePathRef: './assets/img/teamMemberPictures/dummy.webp', name: 'Georg Büchner', job: 'Hampelmann', description: 'yoyo was geht ich komme als Rapper ganz groß raus!!!'}];

  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i < 10; i++){
      this.team.push(this.team[0]);
    }
  }

}

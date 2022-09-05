import {Component, Input, OnInit} from '@angular/core';
import {TeamMember} from "src/app/team/interfaces/team-member";

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() member: TeamMember = {imagePathRef: '', name: '', job: '', description: ''};
  cardWasClicked: boolean;

  constructor() {
    this.cardWasClicked = false;
  }

  ngOnInit(): void {
  }

  //TODO: implement show more/less button
  checkIfClamped() {
  }
}

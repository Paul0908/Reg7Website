import {Component, OnInit} from '@angular/core';
import {TeamMember} from "src/app/team/interfaces/team-member";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
//TODO: text pushen und seitlich anzeigen
export class TeamPageComponent implements OnInit {
  team: TeamMember[] = [{
    imagePathRef: './assets/img/teamMemberPictures/MAckermann.jpg',
    name: 'Markus Ackermann',
    job: 'Geschäftsführender Partner',
    description: 'Mit jahrzehntelanger Erfahrung und hoher technischer Kompetenz ist reg7 der Spezialist an Ihrer Seite, um die Steuerung regulatorischer KPIs erfolgreich in den Meldeprozess zu integrieren.'
  },
    {
      imagePathRef: './assets/img/teamMemberPictures/MNeubert.jpg',
      name: 'Michael Neubert',
      job: 'Produktmanagement reg7monitor / Partner',
      description: 'Mithilfe des reg7monitors können Sie die Prozesse Ihres Meldewesens optimal automatisieren, überwachen und steuern.'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/LInU.jpg',
      name: 'Lee In-U',
      job: 'IT-???',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/HJansen.jpg',
      name: 'Hubert Jansen',
      job: 'Projektmanagement',
      description: 'Mithilfe des reg7monitors können Sie die Prozesse Ihres Meldewesens optimal automatisieren, überwachen und steuern.'
    }];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 1; i < 5; i++) {
      this.team.push(this.team[1]);
    }
  }

}

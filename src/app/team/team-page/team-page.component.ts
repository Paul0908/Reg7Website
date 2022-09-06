import {Component} from '@angular/core';
import {TeamMember} from "src/app/team/interfaces/team-member";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
//TODO: text pushen und seitlich anzeigen
export class TeamPageComponent {
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
      job: 'Hier fehlt wohl noch was',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/HJansen.jpg',
      name: 'Hubert Jansen',
      job: 'Projektmanagement',
      description: 'Mithilfe des reg7monitors können Sie die Prozesse Ihres Meldewesens optimal automatisieren, überwachen und steuern.'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/LKohaupt.jpg',
      name: 'Lars Kohaupt',
      job: 'Hier fehlt wohl noch was',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/SWeiß.jpg',
      name: 'Sandra Weiß',
      job: 'Hier fehlt wohl noch was',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/SSchüssler.jpg',
      name: 'Steffen Schüssler',
      job: 'Hier fehlt wohl noch was',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/NWegner.jpg',
      name: 'Nicola Wegner',
      job: 'Hier fehlt wohl noch was',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/ARothgerber.jpg',
      name: 'Alexander Rothgerber',
      job: 'Hier fehlt wohl noch was',
      description: 'Hier fehlt wohl noch was'
    },
    {
      imagePathRef: './assets/img/teamMemberPictures/PHiller.jpg',
      name: 'Paul David Hiller',
      job: 'Werksstudent',
      description: 'Student an der THM, für die Webseite und andere Sachen verantwortlich'
    },];


}

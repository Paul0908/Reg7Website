import {Injectable} from '@angular/core';
import {Project} from "src/app/projects/interfacesAndTypes/project";

//TODO: import img und richtige imgUrl

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  public projects = new Map<string, Project>([['AbacusDaVinci', {
    title: 'Implementierung ABACUS/DaVinci',
    text: 'Aufgrund der Fusion zweier Institute innerhalb eines Konzerns sollte ABACUS/DaVinci als Meldesoftware erstmals implementiert werden. Das aufnehmende Institut war vollumfänglich meldepflichtig und hatte für die Gruppenmeldung des Konzerns Meldungen nach IFRS zu erstellen. Dabei definierte die Aufsicht eine Übergangsphase, in der sie sowohl Einzelmeldungen der ehemaligen Institute als auch eine zusammengefasste Gruppenmeldungen forderte.\n' +
        '\n' +
        '\n' +
        'Eine besondere Herausforderung lag darin, dass einige Liefersysteme nur temporär anzubinden waren, bevor sie im Rahmen der Datenmigration abgeschaltet wurden. Dies galt insbesondere für die Belieferung der Abacus360 Schnittstellen zur Umsetzung von AnaCredit.\n' +
        '\n' +
        '\n' +
        'Der Schwerpunkt unserer Unterstützung lag in der Definition und Automatisierung von Meldeprozessen, in der Analyse von Meldeergebnissen und im Testmanagement. Dabei war es von besondere Bedeutung, die neuen Prozesse in die bestehenden Meldeprozesse des Konzerns zu integrieren.',
    imgUrl: 'https://images.unsplash.com/photo-1634467599263-af9793758399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
  }],
    ['BaselIVProjekt', {
      title: 'Basel IV Projekt',
      text: 'Während Basel III im Fokus der Eigenmittel stand, befasst sich das sogenannte Basel IV-Rahmenwerk mit den Eigenmittelanforderungen. Im Fokus steht dabei maßgeblich die Beschränkung der Anwendung interner Modelle.\n' +
          '\n' +
          ' \n' +
          '\n' +
          'Im Rahmen des Basel IV-Projektes wurden bei unserem Kunden die geänderten Aspekte der Eigenmittelanforderungen und deren Auswirkungen für das Institut bewertet. Die erforderlichen Systemanpassungen wurden konzipiert und umgesetzt, so dass die Einhaltung der neuen Eigenmittelanforderungen nach Basel IV im Zeitablauf gewährleistet ist.\n' +
          '\n' +
          'Basel IV besitzt Auswirkungen auf mehrere Bereiche der Bank, so dass für gemeinsame Lösungen komplexe Sachverhalte abgestimmt und koordiniert werden mussten.\n' +
          '\n' +
          'In 2018 lag der Fokus der reg7 Unterstützung in der Beurteilung der Meldeanforderungen für die vorsichtige Bewertung. In diesem Zusammenhang erstellten wir das Umsetzungskonzept für die Meldebögen zur Prudent Valuation und unterstützten bei der Definition der erforderlichen Prozesse. Gleichzeitig dokumentierten wir das Vorgehen in einer Arbeitsablaufbeschreibung. Abschließend begleiteten wir die Implementierung der Datenaufbereitung und der Meldesoftware.',
      imgUrl: 'https://reg7.de/wp-content/uploads/2019/04/reg7-baselIV.jpg'
    }],
    ['reg7monitor',
      {
        title: 'Weiterentwicklung reg7monitor',
        text: 'reg7monitor – unsere Lösung zur Automatisierung von Meldeprozessen wird kontinuierlich weiterentwickelt\n' +
            '\n' +
            'In unserem Entwicklungsprojekt erweitern wir die Funktionalitäten der aktuellen Version von reg7monitor.\n' +
            'Die Ankerprozesse werden um weitere fachliche Prüfungen ergänzt. Das eröffnet weitere Möglichkeiten der Prozessteuerung in Abhängigkeit von individuellen Datenbankabfragen.\n' +
            '\n' +
            'Die Upload-Funktionen werden um ein Excel-Format ergänzt. Auf diese Weise lassen sich Jobketten in Excel konzipieren und in reg7monitor integrieren.\n' +
            '\n' +
            'Die Ermittlung automatisierter Prüfungen wird erweitert. Damit wird das Monitoring von qualitativen Kriterien auch über Stichtage hinweg möglich sein.\n' +
            '\n' +
            'Wir entwickeln eine Funktion, die den implementierten Workflow mit allen steuerungsrelevanten Kriterien exportiert. Das damit verbunden Format ist kompatibel mit dem Modellierungswerkzeug ARIS, so dass ein aus dem reg7monitor exportierter Workflow mit dem ARIS Toolset in Form eines Flussdiagramms dargestellt werden kann.',
        imgUrl: 'https://reg7.de/wp-content/uploads/2022/04/reg7-905-700x300.jpg'
      }]]);

  constructor() {
    for (let i = 1; i <= 3; i++) {
      // @ts-ignore
      this.projects.set('Abacus' + i.toString(), this.projects.get('BaselIVProjekt'));

    }
  }
}

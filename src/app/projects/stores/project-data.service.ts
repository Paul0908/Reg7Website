import {Injectable} from '@angular/core';
import {Project} from "src/app/projects/interfacesAndTypes/project";

//TODO: import img und richtige imgUrl

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  public projects = new Map<string, Project>();

  constructor() {
    this.projects.set('AbacusDaVinci', {
      title: 'Implementierung ABACUS/DaVinci',
      text: 'Aufgrund der Fusion zweier Institute innerhalb eines Konzerns sollte ABACUS/DaVinci als Meldesoftware erstmals implementiert werden. Das aufnehmende Institut war vollumfänglich meldepflichtig und hatte für die Gruppenmeldung des Konzerns Meldungen nach IFRS zu erstellen. Dabei definierte die Aufsicht eine Übergangsphase, in der sie sowohl Einzelmeldungen der ehemaligen Institute als auch eine zusammengefasste Gruppenmeldungen forderte.\n' +
          '\n' +
          '\n' +
          'Eine besondere Herausforderung lag darin, dass einige Liefersysteme nur temporär anzubinden waren, bevor sie im Rahmen der Datenmigration abgeschaltet wurden. Dies galt insbesondere für die Belieferung der Abacus360 Schnittstellen zur Umsetzung von AnaCredit.\n' +
          '\n' +
          '\n' +
          'Der Schwerpunkt unserer Unterstützung lag in der Definition und Automatisierung von Meldeprozessen, in der Analyse von Meldeergebnissen und im Testmanagement. Dabei war es von besondere Bedeutung, die neuen Prozesse in die bestehenden Meldeprozesse des Konzerns zu integrieren.',
      imgUrl: 'https://images.unsplash.com/photo-1634467599263-af9793758399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
    })
    for (let i = 1; i <= 5; i++) {
      // @ts-ignore
      this.projects.set(i.toString(), this.projects.get('AbacusDaVinci'));

    }
  }
}

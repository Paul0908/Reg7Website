import {Component} from '@angular/core';
import {ProjectDataService} from "src/app/projects/stores/project-data.service";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(public projectData: ProjectDataService) {
  }
}

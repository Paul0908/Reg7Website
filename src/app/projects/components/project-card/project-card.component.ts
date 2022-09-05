import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "src/app/projects/interfacesAndTypes/project";

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
    @Input() project: Project = {title: 'Reg7', text: '', imgUrl: ''};
    @Input() projectKey: number | string | undefined;

    @Output() showMore: EventEmitter<any> = new EventEmitter();

    showMoreClick(id: number | string) {
        this.showMore.emit(id);
    }

    c(projectKey: number | string | any) {
        console.log(projectKey);
        console.log(this.projectKey);
    }
}

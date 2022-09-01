import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent  {
 @Input() arrayId: number = -1;

 @Input() title: string = '';

 @Input() text: string = '';

 @Input() imgUrl: string = '';

 @Output() showMore: EventEmitter<any> = new EventEmitter();

 showMoreClick(id: number){
   this.showMore.emit(id);
 }
}

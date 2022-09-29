import {Component, Input, OnInit} from '@angular/core';
import {SkillBox} from '../../interfaces/skillBox';

@Component({
  selector: 'app-icon-text-box',
  templateUrl: './icon-text-box.component.html',
  styleUrls: ['./icon-text-box.component.scss']
})
export class IconTextBoxComponent implements OnInit {
  @Input() box!: SkillBox;

  styleObject(): Object {
    if (this.box.borderColor) {
      return {
        'border-bottom': '4px solid  ' + this.box.borderColor,
        'border-right': '4px solid  ' + this.box.borderColor,
        'background-color': this.box.color
      }
    }
    return {'background-color': this.box.color}
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

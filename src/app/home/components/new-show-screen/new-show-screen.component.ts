import {Component, HostListener, OnInit} from '@angular/core';
import {SkillBox} from '../../interfaces/skillBox';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-new-show-screen',
  templateUrl: './new-show-screen.component.html',
  styleUrls: ['./new-show-screen.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', animate('250ms ease-in')),
      transition('show => hide', animate('250ms ease-out'))
    ])
  ]
})

export class NewShowScreenComponent implements OnInit {
  triggerBoxes: boolean = false;
  firstHandler: () => any;
  secondHandler: () => any;
  private beginTitle = '<span class="basicText" kindOfText="title">';
  private endTitle = '</span>';
  services: SkillBox[] = [
    {
      title: this.sanitizer.bypassSecurityTrustHtml(this.beginTitle + 'System&shy;management' + this.endTitle),
      icon: '', color: 'rgba(255, 255, 255, .98)',
      borderColor: 'rgba(3, 44, 66, 1)'
    },
    {
      title: this.sanitizer.bypassSecurityTrustHtml(this.beginTitle + 'Test&shy;manage&shy;ment' + this.endTitle),
      icon: '',
      color: 'rgba(255, 255, 255, .98)',
      borderColor: 'rgba(3, 44, 66, 1)'
    },
    {
      title: this.sanitizer.bypassSecurityTrustHtml(this.beginTitle + 'Lauf&shy;zeiten' + this.endTitle),
      icon: '',
      color: 'rgba(255, 255, 255, .98)',
      borderColor: 'rgba(3, 44, 66, 1)'
    }];

  constructor(private sanitizer: DomSanitizer) {
    this.firstHandler = () => {
      this.triggerBoxes = true;
      this.scrollHandler = this.secondHandler;
    }
    this.secondHandler = () => {
      if (window.scrollY === 0) {
        this.triggerBoxes = false;
        this.scrollHandler = this.firstHandler;
      }
    }
  }

  get stateName() {
    return this.triggerBoxes ? 'show' : 'hide'
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    this.scrollHandler = this.firstHandler;
  }

  ngOnInit(): void {

  }
}

import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SkillBox} from "src/app/home/interfaces/skillBox";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', animate('400ms ease-in')),
      transition('show => hide', animate('250ms ease-out'))
    ])
  ]
})

export class HeroComponent implements OnInit {
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

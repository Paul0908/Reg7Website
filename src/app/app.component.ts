import {Component, ElementRef, HostListener, Inject, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMenuCollapsed = true;
  public downScrolling = false;
  @ViewChild('navbar') navbar!: ElementRef;


  constructor (@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(ev: any) {
    let scrollY = ev.path[1].pageYOffset;
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    console.log(navbarHeight);
    if(scrollY > 200){
      this.downScrolling = true;
      this.renderer.setStyle(this.document.body, 'padding-top', navbarHeight);
    } else {
      this.downScrolling = false;
      this.renderer.removeStyle(this.document.body, 'padding-top');

    }
  }

}

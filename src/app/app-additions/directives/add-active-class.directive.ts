import {Directive, ElementRef} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';

@Directive({
  selector: '[add-active]',
})
export class AddActiveClassDirective {
  navItems: any[];

  activeItem!: number;

  constructor(public containerRef: ElementRef, private router: Router) {
    this.navItems = this.containerRef.nativeElement.children;
    this.activeItemPath();
  }

  activeItemPath(): any {
    this.router.events.pipe(
      filter((e: any): e is RouterEvent => e instanceof RouterEvent),
    ).subscribe((e: RouterEvent) => {
      this.detectUrl(e);
    });
  }

  detectUrl(e: RouterEvent){
    const currentUrl = e.url;
    if (this.activeItem !== undefined) {
      this.navItems[this.activeItem].classList.remove('active');
    }
    if (e.url.length <= 1) {
      this.addActive(0);
    } else if (currentUrl.includes('projekte')) {
      this.addActive(1);
    } else if (currentUrl.includes('leistungen')) {
      this.addActive(2);
    } else if (currentUrl.includes('team')) {
      this.addActive(3);
    } else if (currentUrl.includes('kontakt')) {
      this.addActive(4);
    }
  }

  addActive(arrayKey: any){
    this.navItems[arrayKey].classList.add('active');
    this.activeItem = arrayKey;
  }
}

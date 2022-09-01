import {
  Directive, ElementRef, HostListener, Input,
} from '@angular/core';

/**
 * input is the class name which should be added on hover
 */
@Directive({
  selector: '[class-on-hover]',
})
export default class AddClassOnHoverDirective {
  @Input('class-on-hover') firstClass!: string;

  nativePath: any;

  constructor(public pathRef: ElementRef) {
    this.nativePath = this.pathRef.nativeElement;
  }

  @HostListener('click')
  @HostListener('mouseenter')
  onMouseEnter() {
    this.nativePath.classList.add(this.firstClass);
  }

  @HostListener('click')
  @HostListener('mouseleave')
  onMouseLeave() {
    this.nativePath.classList.remove(this.firstClass);
  }
}

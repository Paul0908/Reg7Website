import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[svg-path]'
})
export class SvgPathDirective {
  @Input() strokeColor!: string;

  nativePath: any;

  constructor(public pathRef: ElementRef) {
    this.nativePath = this.pathRef.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    const {x, y} = this.nativePath.getBoundingClientRect();
    this.nativePath.setAttribute('stroke', this.strokeColor)
    console.log(x,y);
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.nativePath.setAttribute('stroke', '#FFFFFF')
    console.log(this.pathRef);
  }

}

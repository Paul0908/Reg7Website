import AddClassOnHoverDirective from 'src/app/home/directives/add-class-on-hover.directive';
import { ElementRef } from '@angular/core';

describe('SvgPathDirective', () => {
  it('should create an instance', () => {
    const path = new ElementRef('path');
    const directive = new AddClassOnHoverDirective(path);
    expect(directive).toBeTruthy();
  });
});

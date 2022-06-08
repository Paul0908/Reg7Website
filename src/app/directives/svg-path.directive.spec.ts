import { SvgPathDirective } from './svg-path.directive';
import {ElementRef} from "@angular/core";

describe('SvgPathDirective', () => {
  it('should create an instance', () => {
    let path = new ElementRef('path');
    const directive = new SvgPathDirective(path);
    expect(directive).toBeTruthy();
  });
});

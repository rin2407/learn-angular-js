import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class BoldDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'blue';
  }
}

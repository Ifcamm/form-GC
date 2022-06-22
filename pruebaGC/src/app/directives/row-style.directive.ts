import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRowStyle]',
})
export class RowStyleDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.setAttribute(
      'style',
      'color: #FFFFFF; background: #FF4269'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.setAttribute(
      'style',
      'color: #545454; background: #FFFFFF'
    );
  }

  constructor(private element: ElementRef) {}
}

import { Directive, ElementRef, signal } from '@angular/core';

@Directive({
  selector: '[appViewport]'
})
export class ViewportDirective {

  viewportSignal = signal('');
  constructor(private el : ElementRef) { }

}

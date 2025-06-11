import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[HighlightDirective]'
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'red';
  }

}

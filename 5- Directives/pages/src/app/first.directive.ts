import { Directive , ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private element : ElementRef) {
    
   }

   @Input() set backGroundColor(color : string)
   {
    this.element.nativeElement.style.backgroundColor = color;
   }

}

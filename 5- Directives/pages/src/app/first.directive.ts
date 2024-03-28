import { Directive } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor() {
    console.log("halil i. gedik")
   }

}

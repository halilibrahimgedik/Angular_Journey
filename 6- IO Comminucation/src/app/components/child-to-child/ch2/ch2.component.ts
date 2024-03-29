import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ch2',
  template : `
    <p> Child 2 component || {{dataFromParent3}} </p>
    
  `
})
export class Ch2Component {

  @Input() dataFromParent3: any 
}

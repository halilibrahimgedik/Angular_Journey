import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template :`
    <div style="background-color:brown;">
      <p>child 1 component </p>
      <p> Data from Parent => {{childData}} </p>
    </div>
    
  `,
})
export class ChildComponent{

  @Input() childData : any;
}

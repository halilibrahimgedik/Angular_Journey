import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template : `
  <div style="background-color: black;color:white">
    <h4>Parent 1 Component</h4>
    <app-child [childData]="data"></app-child>
  </div>
    

  `,
})
export class ParentComponent  {
  data : any = "Learning Angular"
}

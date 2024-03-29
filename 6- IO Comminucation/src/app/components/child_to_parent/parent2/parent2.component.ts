import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template : `
  <h4>Parent 2 Componment</h4>
    <app-child2 (dataEvent)="catchData($event)"> </app-child2>
  `
})
export class Parent2Component {
  catchData(obj : any){
    // debugger;
    console.log("Parent 2 component'e child2 den gelen data : " + obj.message)
  }

}

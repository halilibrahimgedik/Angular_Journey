import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template : `
  <div style="background-color: crimson;">
    <p>Parent 3 Component </p>
     <!-- Unutma hangi component'de oluşturduysan event'i o component'in selector'ında kullanabilirsin -->
    <app-ch1 (dataSendEvent)="catchDataFromChild1($event)"> </app-ch1>
    <app-ch2 [dataFromParent3] = "sendDataToch2"> </app-ch2>
  <div>

   
  `
})
export class Parent3Component {

  sendDataToch2 : any;

  catchDataFromChild1(value : string){
    console.log("Parent 3 Component'e ch1 component'den gelen data: "+ value);
    this.sendDataToch2 = value;
  }



}

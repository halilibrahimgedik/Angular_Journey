import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-ch1',
  template : `
    <p> Child 1 component || data send from child 1 to parent 3 then parent 3 send same data to child 2  </p>
  `
})
export class Ch1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dataSendEvent.emit("child 1's message = data send ch1 to pr3");
  }

  //bir dataSendEvent adlı event oluşturduk.
  @Output() dataSendEvent: EventEmitter<any> = new EventEmitter();

}

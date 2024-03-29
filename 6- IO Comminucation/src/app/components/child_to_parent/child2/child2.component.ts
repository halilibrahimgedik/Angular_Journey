import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template : `
    
    <p>child 2 componment</p>
  `
})
export class Child2Component implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({message:'merhaba'})
  }

  @Output() dataEvent : EventEmitter<any> = new EventEmitter();
}

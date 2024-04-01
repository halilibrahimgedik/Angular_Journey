import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-btn',
  templateUrl: './popup-btn.component.html',
  styleUrls: ['./popup-btn.component.css']
})
export class PopupBtnComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(private element:ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);  
  }
  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  CloseModal(){
    this.close.emit();
  }
}

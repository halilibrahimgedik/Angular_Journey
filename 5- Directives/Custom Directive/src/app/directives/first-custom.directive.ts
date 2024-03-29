import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFirstCustom]'
})

// export class FirstCustomDirective{
//   constructor(private element : ElementRef) { }

//   @Input() set backgroundColor(color : string){
//     this.element.nativeElement.style.backgroundColor = color;
//   }

// }

export class FirstCustomDirective implements OnInit
{
  constructor(private element : ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.background;
  }
  
  @Input() background : any;

  @HostListener("click")
  onClick(){
    alert("Html nesnesine tıklandı");
  }

  @HostBinding("style.color")
  writingColor : string = 'darkBlue';
}

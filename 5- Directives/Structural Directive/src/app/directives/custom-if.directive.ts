import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor( private templateRef: TemplateRef<any>,
              private viewContainerRef : ViewContainerRef ) 
  { }
  
  @Input() set appCustomIf(value: boolean){
    if(value)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      // ilgili elementi DOM nesnesine ekleyecek
    }
    else
    {
      // ilgili elementi DOM nesnesine eklemeyecek
      this.viewContainerRef.clear();
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding:20px;backgroundColor:cyan;font-size:20px">

      <div *appCustomIf="true">
        Merhaba Dünya !
      </div>

      <div *appCustomFor="2;let j = index" style="margin-top:10px">
        Hello World ! - {{j}}
      </div>

    </div>
  `,
})
export class AppComponent {
  title = 'StructuralDirective';
}

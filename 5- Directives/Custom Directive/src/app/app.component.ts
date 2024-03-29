import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <div appFirstCustom [backgroundColor]="'yellow'">
      merhaba
    </div> -->
    <div appFirstCustom background="pink" 
      style="padding:20px;font-size:28px">
      merhaba
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirective';
}

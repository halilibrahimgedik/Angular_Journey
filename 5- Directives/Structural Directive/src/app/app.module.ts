import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomForDirective } from './directives/custom-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomIfDirective,
    CustomForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

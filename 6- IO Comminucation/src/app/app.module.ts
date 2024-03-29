import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/Parent_to_child/parent/parent.component';
import { ChildComponent } from './components/Parent_to_child/child/child.component';
import { Parent2Component} from './components/child_to_parent/parent2/parent2.component';
import { Child2Component } from './components/child_to_parent/child2/child2.component';
import { Ch1Component } from './components/child-to-child/ch1/ch1.component';
import { Ch2Component } from './components/child-to-child/ch2/ch2.component';
import { Parent3Component } from './components/child-to-child/parent3/parent3.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Ch1Component,
    Ch2Component,
    Parent3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

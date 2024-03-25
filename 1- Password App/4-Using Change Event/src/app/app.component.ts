import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers; 
  }

  modifySymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick(){
    console.log(`Values;
        Letters : ${this.includeLetters}
        Numbers : ${this.includeNumbers}
        Symbols : ${this.includeSymbols}
    `);
  }
}

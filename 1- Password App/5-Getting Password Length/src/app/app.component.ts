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

  title = "getting password length"
  length : number = 0;
  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;


  modifyLength(value : string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      debugger;
      this.length = parsedValue;
    }
  }

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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "getting password length"
  length : number = 0;
  password = '';
  
  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;


  modifyLength(value : string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
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
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '?!#%*%.';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword='';

    for(let i=0; i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

  }
}

import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MatchingLetter';

  randomText = faker.lorem.sentence();
  enteredText = '';
  css = 'correct';

  getInputValue(value : string){
    this.enteredText = value;
  }

  compare(randomLetter: string , enteredLetter: string)
  {
   if(!enteredLetter)
   {
     return 'pending';
   }

   return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}

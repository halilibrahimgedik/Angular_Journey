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
  title = 'passwordApp';

  name = "";
  password="0000";

  getName(){
    // console.log("Hello World, I'm learning 'Event Binding' ");
    return this.name="halil ibrahim gedik"
  }

  getPassword(){
    return this.password = "1546298536565"
  }
}

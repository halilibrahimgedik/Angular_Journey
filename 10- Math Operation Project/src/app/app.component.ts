import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperationsComponent } from './operations/operations.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OperationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '10-Math-Operation-Project';
}

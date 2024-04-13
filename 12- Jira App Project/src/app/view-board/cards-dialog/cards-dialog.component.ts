import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatDialogActions} from '@angular/material/dialog';

@Component({
  selector: 'app-cards-dialog',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,MatIconModule,FormsModule,MatDialogContent,MatDialogActions],
  templateUrl: './cards-dialog.component.html',
  styleUrl: './cards-dialog.component.css'
})
export class CardsDialogComponent {
  title : string = "";
  tasks : Array<string> = [""];
  tasksLoop : any = [false]

  constructor(private matDialogRef : MatDialogRef<CardsDialogComponent>){

  }

  deleteTask(index : number){

  }

  addTask(){
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  Cancel(){
    this.matDialogRef.close();
  }

}

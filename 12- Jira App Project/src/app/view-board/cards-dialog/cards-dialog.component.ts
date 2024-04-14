import { Component, Inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatDialogContent, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogActions} from '@angular/material/dialog';
import { BoardService } from '../../services/board.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-cards-dialog',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,MatIconModule,FormsModule,MatDialogContent,MatDialogActions,MatSnackBarModule],
  templateUrl: './cards-dialog.component.html',
  styleUrl: './cards-dialog.component.css'
})
export class CardsDialogComponent implements OnInit {
  title : string = "";
  tasks : Array<string> = [""];
  tasksLoop : any = [false]

  constructor(private matDialogRef : MatDialogRef<CardsDialogComponent>, @Inject (MAT_DIALOG_DATA) public data : any, 
  private boardService : BoardService,private _snackBar: MatSnackBar)
  {}

  ngOnInit(): void 
  {
    if(this.data.editMode){
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title
      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].tasklist
    }
    
  }

  deleteTask(index : number){
    this.tasks.splice(index,1);
    this.tasksLoop.splice(index,1);
  }

  addTask(){
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  cancel(){
    this.matDialogRef.close();
  }

  create(){
    if(this.tasks.some((element:string)=> element === "" ))
    {
      this._snackBar.open("enter new task","Ok")
    }
    else
    {
      if(!this.data.editMode){
        this.boardService.boards[this.data.boardIndex].cards.push({
          title : this.title,
          tasklist : this.tasks,
          status : this.tasksLoop,
        });
      }
      else{
        this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title
        this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status =  this.tasksLoop
        this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].tasklist = this.tasks
      }
      
      this.boardService.updateDataToLocalstorage();
      this.cancel()
    }
  }

}

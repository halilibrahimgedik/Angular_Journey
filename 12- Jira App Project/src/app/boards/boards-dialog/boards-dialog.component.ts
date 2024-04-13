import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatDialogActions} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import { BoardService } from '../../services/board.service';


@Component({
  selector: 'app-boards-dialog',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatDialogContent,MatDialogActions,MatButton],
  templateUrl: './boards-dialog.component.html',
  styleUrl: './boards-dialog.component.css'
})
export class BoardsDialogComponent {

  boardsForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private dialogRef : MatDialogRef<BoardsDialogComponent>,private boardService : BoardService) {
    this.boardsForm = this.formBuilder.group({
      title: [null,[Validators.required]],
    })
  }

  get title(){
    return this.boardsForm.get("title");
  }

  create(){
    this.boardService.saveBoard(this.title?.value);
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }
}

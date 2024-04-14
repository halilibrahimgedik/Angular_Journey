import { Component, OnInit } from '@angular/core';
import {  UpperCasePipe, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog } from '@angular/material/dialog';
import { CardsDialogComponent } from './cards-dialog/cards-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-board',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatCardModule,MatCheckboxModule,FormsModule,UpperCasePipe,TitleCasePipe,],
  templateUrl: './view-board.component.html',
  styleUrl: './view-board.component.css'
})
export class ViewBoardComponent implements OnInit {
  boardId : any = 0;
  boardTitle : string = "";

  constructor(private route : ActivatedRoute, public boardService : BoardService, 
  private matDialog: MatDialog,) 
  {
    this.boardId = this.route.snapshot.paramMap.get("boardIndex");

    this.boardTitle = this.boardService.boards[this.boardId - 1].title
    
  }

  ngOnInit(): void {

  }

  openCardDialog(){
    const matDialogRef = this.matDialog.open(CardsDialogComponent,{ 
      width:'550px',
      data: { boardIndex : (this.boardId - 1), editMode : false }
    })
  }

  deleteCard(cardIndex : number){
    this.boardService.boards[this.boardId-1].cards.splice(cardIndex,1);
    this.boardService.updateDataToLocalstorage();
  }

  editCard(cardIndex : number, card : any){
    // Let's edit with the dialog window, but it must be different from the dialog window we used to add cards before!
    // if 'editMode : true' , we can open the edit dialog window, else we can open 'card add' dialog
    const matDialogRef = this.matDialog.open(CardsDialogComponent,{ 
      width:'550px',
      data: { boardIndex : (this.boardId - 1), editMode : true, cardIndex: cardIndex }
    })
  }

}

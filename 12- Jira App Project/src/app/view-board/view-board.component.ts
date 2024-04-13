import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CardsDialogComponent } from './cards-dialog/cards-dialog.component';

@Component({
  selector: 'app-view-board',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './view-board.component.html',
  styleUrl: './view-board.component.css'
})
export class ViewBoardComponent {

  boardId : any = 0;
  boardTitle : string = "";
  constructor(private route : ActivatedRoute, public boardService : BoardService, private matDialog: MatDialog) {
    this.boardId = this.route.snapshot.paramMap.get("boardIndex");

    this.boardTitle = this.boardService.boards[this.boardId - 1].title
    
  }

  openCardDialog(){
    const matDialogRef = this.matDialog.open(CardsDialogComponent,{ 
      width:'500px',
     })
  }
}

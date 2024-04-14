import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards: Array<any> = []

  constructor() {
    let getBoardsFromLocalStorage = localStorage.getItem("boards");
    if(getBoardsFromLocalStorage != null){
      this.boards = JSON.parse(getBoardsFromLocalStorage);
    }
   }

  public saveBoard(title : any){
    let newBoardObject = {
      title: title,
      cards: []
    }

    this.boards.push(newBoardObject)

    localStorage.setItem("boards",JSON.stringify(this.boards))
  }

  deleteboard(boardId:number){
    this.boards.splice(boardId,1);
    localStorage.setItem("boards",JSON.stringify(this.boards))
  }

  public updateDataToLocalstorage(){
    localStorage.setItem("boards",JSON.stringify(this.boards));
  }

}

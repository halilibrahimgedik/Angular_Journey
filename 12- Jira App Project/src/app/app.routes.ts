import { Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { ViewBoardComponent } from './view-board/view-board.component';

export const routes: Routes = [
    { path: "", pathMatch:'full', redirectTo:"boards" },
    { path: "boards", component : BoardsComponent },
    { path: "view-board/:boardIndex", component : ViewBoardComponent },
    
];

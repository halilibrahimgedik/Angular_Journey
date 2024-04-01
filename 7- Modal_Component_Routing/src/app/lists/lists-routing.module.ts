import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListsHomeComponent} from './lists-home/lists-home.component';

const routes: Routes = [
  {path:'',component: ListsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }

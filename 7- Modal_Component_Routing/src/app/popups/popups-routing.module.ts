import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopupsHomeComponent} from './popups-home/popups-home.component';

const routes: Routes = [
  { path: '', component:PopupsHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }

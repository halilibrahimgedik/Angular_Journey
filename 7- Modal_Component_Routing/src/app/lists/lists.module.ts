import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ListsHomeComponent,
    StatisticsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }

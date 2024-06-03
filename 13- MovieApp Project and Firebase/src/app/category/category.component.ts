import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories :Category[];

  selectedCategory : Category = null;
  displayAllCategories: boolean = true;

  constructor(private categoryService: CategoryService){ }

  ngOnInit(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })
  }

  selectCategory(category? : Category){

    if(category){
      this.selectedCategory = category;
      this.displayAllCategories = false;
    }
    else{
      this.selectedCategory = null;
      this.displayAllCategories = true;
    }
  }

}

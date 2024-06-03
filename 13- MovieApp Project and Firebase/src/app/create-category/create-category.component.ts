import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../Models/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
  providers: [
    CategoryService
  ]
})
export class CreateCategoryComponent implements OnInit{

  createCategoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router: Router){
    this.createCategoryForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(25)] ]
    })
  }

  ngOnInit(): void {
    
  }


  createCategory(){
    var category: Category = {
      name: this.name.value
    }

    this.categoryService.createCategory(category).subscribe({
      next: (data) => {
        this.router.navigate(['/movies'])
      },
      error:(error)=> console.log(error)
    })
  }

  get name(){
    return this.createCategoryForm.get("name");
  }
}

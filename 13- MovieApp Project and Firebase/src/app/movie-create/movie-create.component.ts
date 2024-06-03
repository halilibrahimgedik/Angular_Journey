import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../Models/category';
import { MovieService } from '../services/movie.service';
import { Movie } from '../Models/movie';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [CategoryService,MovieService]
})
export class MovieCreateComponent implements OnInit
{
  categories:Category[];
  error:string;
  createMovieForm;

  //! FormGroup üzerinden form Oluşturma
  //   createMovieForm = new FormGroup({
  //   title: new FormControl(""),
  //   description: new FormControl(""),
  //   imageUrl: new FormControl(""),
  //   categoryId: new FormControl(""),
  // });

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private formBuilder: FormBuilder)
  {
    
    //! 2-) FormBuilder üzerinden form oluşturma.
    //todo aşağıdaki 2'si aynı kullanım
    this.createMovieForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(5)] ],
      description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(450)] ],
      imageUrl: ["", [Validators.required]],
      categoryId: ["", [Validators.required]],
    });

    // this.createMovieForm = this.formBuilder.group({
    //   title: new FormControl(""),
    //   description: new FormControl(""),
    //   imageUrl: new FormControl(""),
    //   categoryId: new FormControl(""),
    // });
  }

  get title(){
    return this.createMovieForm.get("title");
  }
  get description(){
    return this.createMovieForm.get("description");
  }
  

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) =>{
        this.categories = data;
      },
      error: (error)=>{
        this.error = error;
      },
      complete: ()=>{
        console.log("kategoriler çekildi");
      }
    })
  }

  createMovie(){

    const movieToCreate:Movie = 
    { 
      id: 0,
      title: this.createMovieForm.value.title, 
      description: this.createMovieForm.value.description,
      imageUrl: this.createMovieForm.value.imageUrl,
      categoryId: parseInt(this.createMovieForm.value.categoryId),
      isPopular: false,
      publishedDate: new Date().getTime(),
    };

    this.movieService.createMovie(movieToCreate).subscribe({
      next: (data)=>{
        // this.router.navigate(['/movies']) filmler sayfası

        // ? ['/movies',data.id] olarak '/' yazsak da router film detay sayfasına yönlendirir.Aşağıdaki gibi
        //this.router.navigate(['/movies',data.id])
        
        this.router.navigate(['/movies'])
      },
      error:(error)=> console.log(this.error)
    });

  }
}

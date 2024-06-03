import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
    
  errorMessage:any;
  title:string=" Vizyondaki Filmler"
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  today : Date = new Date();
  stringForSearch:string = "";
  isCategorySelected:boolean= false;

  constructor(private alertify: AlertifyService,
              private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService){}

ngOnInit(): void 
{
  this.activatedRoute.params.subscribe( params => 
  {this.isCategorySelected = params["categoryId"]})
  //! params üzerinden erişim
  this.activatedRoute.params.subscribe( params => 
    {
      this.movieService.getMovies(params["categoryId"]).subscribe({
        next: (data) =>{ 
          this.movies = data;
          this.filteredMovies = this.movies;
        },
        error: (error) =>{
          this.errorMessage = error;
        }
      });
    });

  //!  paramMap üzerinden erişim
  // this.activatedRoute.paramMap.subscribe(params =>
  // {
  //   this.movieService.getMovies(parseInt(params.get("categoryId"))).subscribe
  //   ({
  //     next: (data) => {
  //       this.movies = data;
  //       this.filteredMovies = this.movies;
  //     },
  //     error: (error) => {
  //       this.errorMessage = error;
  //     }
  //   });
  // });
}

  onInputChange(){
    this.filteredMovies = this.stringForSearch ? 
    this.filteredMovies.filter((movie:Movie)=> movie.title.toLocaleLowerCase().indexOf(this.stringForSearch) !== -1) 
    : 
    this.movies;
  }

  addToList($event: any ,movie : Movie){
    if($event.target.classList.contains('btn-success')){

      $event.target.innerText = "Listeden Çıkar"
      $event.target.classList.remove('btn-success')
      $event.target.classList.add('btn-danger')

      this.toastr.success(`${movie.title} listeye eklendi`,"Eklendi");
    }
    else{
      $event.target.innerText = "Listeye Ekle"
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-success')

      this.alertify.error(`${movie.title} listeden çıkartıldı`);
      this.toastr.error(`${movie.title} listeden çıkartıldı`,"Çıkartıldı");
      
    }
    
  }

  getPopularMovies() {
    return this.movies.filter(movie => movie.isPopular).slice(0, 3);
  }
}

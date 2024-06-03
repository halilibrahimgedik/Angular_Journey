import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
  providers:[MovieService]
})
export class MovieDetailsComponent implements OnInit{

  loadingIcon:boolean = false;
  movie:Movie;
  errorMessage:string;
  id:number;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute)
  {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      this.loadingIcon = true
      this.movieService.getMovieById(params["movieId"]).subscribe({
        next: (data)=>{
          this.movie = data;
          this.loadingIcon = false;
        },
        error: (error) => {
          this.errorMessage = error;
          this.loadingIcon = false;
        }
      });
    });

  }

}

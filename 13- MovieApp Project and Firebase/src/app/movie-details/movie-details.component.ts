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

  movie:Movie;
  errorMessage:string;
  id:number;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute)
  {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params["movieId"])
      this.movieService.getMovieById(params["movieId"]).subscribe({
        next: (data)=>{
          this.movie = data;
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
    });

  }

}

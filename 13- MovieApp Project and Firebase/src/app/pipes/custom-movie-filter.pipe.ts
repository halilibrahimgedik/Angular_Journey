import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Models/movie';

@Pipe({
  name: 'MovieFilter'
})
export class CustomMovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], searchString: string): Movie[] {
    
    searchString.toLocaleLowerCase();


    return searchString? movies.filter((m: Movie)=> m.title.toLocaleLowerCase().indexOf(searchString) !== -1) : movies;

  }

}

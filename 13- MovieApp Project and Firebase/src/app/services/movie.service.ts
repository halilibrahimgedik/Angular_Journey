import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../Models/movie';
import { Observable, catchError, delay, map, tap, throwError } from 'rxjs';


// yerel servis olarak ekleyelim.Yani hangi component bunu kullanıyorsa,
// çağırıldığında bu servisin nesnesi üretilsin.

@Injectable() 
export class MovieService {

  url:string = "http://localhost:3000/movies";
  firebaseUrl = "https://angular-movie-app-886d0-default-rtdb.europe-west1.firebasedatabase.app/"
  errorMessage:string;
  constructor(private httpClient: HttpClient){ }

  //todo bu metod çağırıldığında geriye observable nesne döndürüceğiz
  getMovies(categoryId: string): Observable<Movie[]>
  {

    //! geriye dönen Observable nesnesine servisin çağırıldığı yerde subscribe olunmadan
    //! önce araya bazı yazılımlar sokalım 'pipe' metodu sayesinde .Loglama, Hata Yönetimi gibi...
    return this.httpClient.get<Movie[]>(this.firebaseUrl + "movies.json")
    .pipe( 
      map(response => {
        const movies:Movie[] = [];

        for(const key in response){    
          
          if(categoryId){
            if(categoryId === response[key].categoryId){
              movies.push( {...response[key], id: key} )
            }
          }else{
            movies.push( {...response[key], id: key} )
          }
        }

        return movies;
      }),
      tap(data => console.log(data)),
      catchError(this.handleError),
      delay(500)
    );
  }
  
  // private 'handleError' metodumuz
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // client yada network ile ilgili hata
      return throwError(()=> new Error("yanlış istek. Böyle bir sayfa yok"));
    }
    else{
      // backen ile ilgili hata
      switch(error.status){
        case 404:
          this.errorMessage ="not found.";
          break;
        case 401:
          this.errorMessage ="unauthorized.";
          break;
        case 403:
          this.errorMessage ="access denied.";
          break;
        case 500:
          this.errorMessage ="server error.";
          break;
        default:
          this.errorMessage ="error occured.";
          break;
      }

      return throwError( ()=> new Error(this.errorMessage));
    }
  }

  getMovieById(movieId: any): Observable<Movie>{
    return this.httpClient.get<Movie>(this.firebaseUrl + `movies/${movieId}.json`).pipe(
      catchError(this.handleError),
      delay(500)
    );
  }
  
  createMovie(movie:Movie): Observable<Movie>
  {
    //todo 3. parametresi 'Header' bilgisi gönderilir.
    //todo Mesela 'JWT' burada gönderilecek.
    // örnek 1 header bilgisi oluşturalım.
    
    const httpOptions ={
      headers: new HttpHeaders({
        //! göndermek istediğimiz parametreler burada tanımlanacak
        'Content-Type': 'application/json',
        'Authorixation': 'Access Token'
      })
    }

    return this.httpClient.post<Movie>(this.firebaseUrl + '/movies.json', movie , httpOptions).pipe(
      tap(data => console.log(data)), //veriyi loglamak,gözlemlemek için kullanılır
      catchError(this.handleError)
    );
  }
}

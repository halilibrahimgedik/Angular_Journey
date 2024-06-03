import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Category } from '../Models/category';

@Injectable()
export class CategoryService {

  url:string = "http://localhost:3000/categories";
  firebaseUrl = "https://angular-movie-app-886d0-default-rtdb.europe-west1.firebasedatabase.app/"

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(this.firebaseUrl+'categories.json').pipe(
      map( response => {
        var categories: Category[] = [];
        
        for(const key in response){
          categories.push({...response[key], id: key })
        }

        return categories;
      }),
      tap(data => console.log(data))    
    );
  }

  createCategory(category:Category): Observable<Category>{
    //örnek header bilgisi

    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application.json',
        'token': 'Access_Token'
      })
    };

    return this.httpClient.post<Category>(this.firebaseUrl+ "categories.json", category, httpHeaders)
    .pipe(
      tap( data => console.log(data)),
      catchError( (error) => {
        return throwError(()=> console.log(error)
        );
      })
    );
  }
}

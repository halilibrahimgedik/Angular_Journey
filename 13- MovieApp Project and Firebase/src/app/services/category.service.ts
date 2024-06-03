import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable()
export class CategoryService {

  url:string = "http://localhost:3000/categories";

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(this.url);
  }
}

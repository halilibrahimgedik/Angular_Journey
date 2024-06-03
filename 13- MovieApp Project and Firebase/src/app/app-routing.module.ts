import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch: 'full'},
  {path: "movies", component: MoviesComponent},
  {path: "movies/category/:categoryId", component: MoviesComponent},
  {path: "movies/create", component: MovieCreateComponent},
  {path: "movies/:movieId", component: MovieDetailsComponent},
  {path: "categories/create", component: CreateCategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

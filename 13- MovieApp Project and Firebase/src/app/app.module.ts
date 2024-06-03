import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CustomSummaryPipe } from './pipes/customSummary.pipe';
import { CustomMovieFilterPipe } from './pipes/custom-movie-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCreateComponent } from './movie-create/movie-create.component';


@NgModule({
  declarations: [       // ! component tanımlamaları
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MovieCardComponent,
    MoviesComponent,
    MovieDetailsComponent,
    CustomSummaryPipe,
    CustomMovieFilterPipe,
    MovieCreateComponent,
  ],
  imports: [            // ! module tanımlamaları
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],      
  providers: [          // ! Service Tanımlamaları
    provideClientHydration(),
    AlertifyService    // bu servise singleton, yani root olarak eklenir burada tanımlanırsa
  ],
  bootstrap: [AppComponent]  // ! başlangıç component'i
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceholdersModule } from './placeholders/placeholders.module';

import { HomesComponent } from './homes/homes.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    NotFoundComponent
  ],
  imports: [ // buradaki sıralama önemli route yapılandırmasında bakılacak sırayı temsi ediyor
                        
  //!! eski sıralamada localhost:4200/tables dediğimizde notFound sayfasına düşüyorduk çünkü url'ye localhost:4200/tables dediğimizde    
  //!! altta bulunan yorum satırına alınmış module sıralamasına göre TablesModule den önce AppRoutingModule de bulunan 
  //!! " { path : '**', component : NotFoundComponent } " path tanımlaması her isteğe uyduğu için url isteğimiz 
  //!! TablesModule'ün iindeki path tanımlamalarına bakmadan NotFoundComponent'i sayfaya taşıyor.  
  
  //? BrowserModule,                                 
  //? AppRoutingModule,                
  //? PlaceholdersModule,                            
  //? TablesModule,

  BrowserModule,
  AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

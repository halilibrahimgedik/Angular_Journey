import {Component, OnInit, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import {catchError, map, throwError} from "rxjs";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent, JsonPipe],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  error = signal('');


  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<{places: Place[]}>('http://localhost:3000/places')
      .pipe(
        map((responseData) => responseData.places),
        catchError((error) => throwError(() => new Error('something went wrong')))
      )
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        error : (error: Error) => this.error.set(error.message)
      });
  }

  onSelectPlace(selectedPlace: Place) {
    this.httpClient.put('http://localhost:3000/user-places', {
      placeId: selectedPlace.id,
    }).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

}

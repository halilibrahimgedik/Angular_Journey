import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface CallResponse{
  urls:{
    regular : string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPhotos()
  {
    return this.http.get<CallResponse>("https://api.unsplash.com/photos/random",{
      headers:{
        Authorization:" Client-ID Nx6vk4ZzDjoRpe9j3GRZ2ZqoFaieo8a0329U2GguLg8"
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service'

@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.css']
})
export class DisplayphotoComponent implements OnInit {

  photoUrl : string = '';

  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
    this.getImages();
    console.log("getImages metodu çalıştı");
  }

  getImages(){
    this.photoService.getPhotos().subscribe(response =>{
      this.photoUrl = response.urls.regular;
    });
  }

  changeImage(){
    this.getImages();
  }
}

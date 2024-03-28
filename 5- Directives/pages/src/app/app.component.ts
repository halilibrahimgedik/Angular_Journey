import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 3 ;

  images = [
    {
      name: "Lens ve Manzara",
      address : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlld3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: " Ayasofya Cami",
      address :"https://media.istockphoto.com/id/1587259915/tr/foto%C4%9Fraf/high-sophia-night-high-sophia-ayasofya-gece-ayasofya-turkey-istanbul-blue-mosque-camii.jpg?s=612x612&w=0&k=20&c=GBrGl6u9eVWThc-nhbUVnOg48KjJdWZk_WQA2HQjCYo="
    },
    {
      name: " Galata Kulesi",
      address :"https://media.istockphoto.com/id/497215513/tr/foto%C4%9Fraf/galata-tower-in-istanbul.jpg?s=612x612&w=0&k=20&c=4DbzMNGWjcVyCMhKQYGP1aEQrU8K2knty_vOrNhEP68="
    },
    {
      name: "Kız Kulesi",
      address :"https://media.istockphoto.com/id/2094541994/tr/foto%C4%9Fraf/photo-of-the-maidens-tower-on-the-bosphorus-the-man-took-a-photo-of-the-tower-with-an.jpg?s=612x612&w=0&k=20&c=5oZHqvB2UE1tkiNIoQFDSpieAjcuoRRhQWwPltaaW48="
    },
    
  ]
  
  // changePage(i:number){
  //   this.currentPage = i;
  // }
  previous(){
    this.currentPage -= 1
  }
  next(){
    this.currentPage += 1
  }
}

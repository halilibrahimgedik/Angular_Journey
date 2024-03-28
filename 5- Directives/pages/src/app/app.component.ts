import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0 ;

  pageIndex(index: number){
    return Math.abs(this.currentPage - index) < 3;
  }

  images = [
    {
      title: "Lens ve Manzara",
      url : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlld3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: " Ayasofya Cami",
      url :"https://media.istockphoto.com/id/1587259915/tr/foto%C4%9Fraf/high-sophia-night-high-sophia-ayasofya-gece-ayasofya-turkey-istanbul-blue-mosque-camii.jpg?s=612x612&w=0&k=20&c=GBrGl6u9eVWThc-nhbUVnOg48KjJdWZk_WQA2HQjCYo="
    },
    {
      title: " Galata Kulesi",
      url :"https://media.istockphoto.com/id/497215513/tr/foto%C4%9Fraf/galata-tower-in-istanbul.jpg?s=612x612&w=0&k=20&c=4DbzMNGWjcVyCMhKQYGP1aEQrU8K2knty_vOrNhEP68="
    },
    {
      title: "Kapadokya",
      url :"https://images.unsplash.com/photo-1510253687831-0f982d7862fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVya2V5fGVufDB8fDB8fHww"
    },
    
    {
      title: "Dolmabahçe Sarayı",
      url : "https://images.unsplash.com/photo-1601565465051-67971a2d838c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvbG1hYmFoJUMzJUE3ZSUyMHNhcmF5JUM0JUIxfGVufDB8fDB8fHww"
    },
    {
      title: "Muğla",
      url :"https://media.istockphoto.com/id/1482404629/tr/foto%C4%9Fraf/aerial-drone-photo-of-the-bustling-g%C3%B6cek-marina-located-in-the-beautiful-coastal-town-of.jpg?s=612x612&w=0&k=20&c=ePxyf-MnljU9fdm0KbMX-K2_e_1aOkhoW2ylWWv4D4A="
    },
    {
      title: " ",
      url :"https://images.unsplash.com/photo-1608627732730-0b6f71848887?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TXUlQzQlOUZsYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: " Nemrut Dağı",
      url :"https://isbh.tmgrup.com.tr/sbh/poll/2020/10/14/a237b5f3-2fcf-4fbd-afe5-b69ab8fc289b.jpg"
    },
    {
      title: " Pamukkale Travertenleri",
      url :"https://isbh.tmgrup.com.tr/sbh/poll/2020/10/14/70825593-ab76-44c1-8910-fe907406c5be.jpg"
    },
    {
      title: "Cumalıkızık",
      url :"https://isbh.tmgrup.com.tr/sbh/poll/2020/10/14/5e1ff53f-f0b9-45b7-8477-602c3c96f881.jpg"
    },
    {
      title: "Lens ve Manzara",
      url : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlld3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: " Ayasofya Cami",
      url :"https://media.istockphoto.com/id/1587259915/tr/foto%C4%9Fraf/high-sophia-night-high-sophia-ayasofya-gece-ayasofya-turkey-istanbul-blue-mosque-camii.jpg?s=612x612&w=0&k=20&c=GBrGl6u9eVWThc-nhbUVnOg48KjJdWZk_WQA2HQjCYo="
    },
    {
      title: " Galata Kulesi",
      url :"https://media.istockphoto.com/id/497215513/tr/foto%C4%9Fraf/galata-tower-in-istanbul.jpg?s=612x612&w=0&k=20&c=4DbzMNGWjcVyCMhKQYGP1aEQrU8K2knty_vOrNhEP68="
    },
    {
      title: "Kapadokya",
      url :"https://images.unsplash.com/photo-1510253687831-0f982d7862fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVya2V5fGVufDB8fDB8fHww"
    },
    
    {
      title: "Dolmabahçe Sarayı",
      url : "https://images.unsplash.com/photo-1601565465051-67971a2d838c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvbG1hYmFoJUMzJUE3ZSUyMHNhcmF5JUM0JUIxfGVufDB8fDB8fHww"
    },
    {
      title: "Muğla",
      url :"https://media.istockphoto.com/id/1482404629/tr/foto%C4%9Fraf/aerial-drone-photo-of-the-bustling-g%C3%B6cek-marina-located-in-the-beautiful-coastal-town-of.jpg?s=612x612&w=0&k=20&c=ePxyf-MnljU9fdm0KbMX-K2_e_1aOkhoW2ylWWv4D4A="
    },
    {
      title: " ",
      url :"https://images.unsplash.com/photo-1608627732730-0b6f71848887?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TXUlQzQlOUZsYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: " Nemrut Dağı",
      url :"https://isbh.tmgrup.com.tr/sbh/poll/2020/10/14/a237b5f3-2fcf-4fbd-afe5-b69ab8fc289b.jpg"
    },
    {
      title: " Pamukkale Travertenleri",
      url :"https://isbh.tmgrup.com.tr/sbh/poll/2020/10/14/70825593-ab76-44c1-8910-fe907406c5be.jpg"
    },
    {
      title: "Cumalıkızık",
      url :"https://isbh.tmgrup.com.tr/sbh/poll/2020/10/14/5e1ff53f-f0b9-45b7-8477-602c3c96f881.jpg"
    },
  ]
  
  // changePage(i:number){
  //   this.currentPage = i;
  // }
  // previous(){
  //   this.currentPage -= 1
  // }
  // next(){
  //   this.currentPage += 1
  // }
}

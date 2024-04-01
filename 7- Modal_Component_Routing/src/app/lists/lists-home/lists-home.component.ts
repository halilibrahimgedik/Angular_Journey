import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  statiticDatas : {value:number,label: string}[] = [
    {value : 40286, label:"Müşteri"},
    {value : 3090, label:"Yorum"},
    {value : 1200, label:"Ürün"},
  ];

  products = [
    {img:"dresser.jpeg",title:"Şifonyer",description:"Her türlü eşyanızı koyabileceğiniz şifonyer"},
    {img:"couch.jpeg",title:"Kanepe",description:"Oturma odası için rahat bir koltuk"},
  ]

}

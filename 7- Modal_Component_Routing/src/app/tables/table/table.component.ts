import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  datas : { name: string, age: number, job: string, employed: string }[]=[
    {name : "halil", age : 22, job :'Bilgisayar Mühendisi', employed :'Hayır'},
    {name : "Emre", age : 19, job :'Öğretmen', employed :'Evet'},
    {name : "Elif", age : 21, job :'Yazılım Mühendisi', employed :'Evet'},
  ];

  headers : { key: string, label: string }[]=[
    { key : 'employed', label : 'Aldığı ücretten memnun mu ?'},
    { key : 'name', label : 'Ad Soyad'},
    { key : 'age', label : 'Yaş'},
    { key : 'job', label : 'Meslek'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

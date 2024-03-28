import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  name = '';
  date = '';
  price = "";
  height = 0;
  mile = 0;

  student = {
    name : 'halil gedik',
    age : '22'
  }

  getNameValue(name : string){
    this.name = name;
  }
  getDateValue(date : string){
    this.date = date;
  }
  getPriceValue( price : string){
    this.price = price;
  }
  getHeightValue(height : string){
    this.height = parseFloat(height);
  }
  getMiletValue(mile : string){
    this.mile = parseFloat(mile);
  }

}

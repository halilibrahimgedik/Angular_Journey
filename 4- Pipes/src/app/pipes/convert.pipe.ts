import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, type:string) : unknown {
    switch(type){
      case "km" :{
        return (value*1.609344)
      }
      case "m" :{
        return (value*1.609344*1000)
      }
      case "cm" :{
        return (value*1.609344*1000*100)
      }
      default:
        throw new Error("böyle bir değer yok")

    }
  }

}

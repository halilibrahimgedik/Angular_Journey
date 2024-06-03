import { Pipe, PipeTransform } from "@angular/core";


//TODO 1-) bu decorator'ı sınıfın üstüne eklemeliyiz
//TODO daha sonra bu decorator'a parametre verebiliriz.
//TODO (summary dediğimizde bu pipe çalışacak)
//TODO daha sonra PipeTransform'dan implemente alacak sınıfımız.
//TODO bu arayüzden gelen "transform" metodunu kullanacağız.
@Pipe({
    name:"summary"
}
) 
export class CustomSummaryPipe implements PipeTransform{

    //? movie.description | summary  -> dediğmizde description string alanı aşağıda
    //? implemente ettiğimiz value yerine geçicek
    // ? açıklama alanı string olacağı için "value: string" olarak değiştirdik

    //? Neden 2. parametreyi charLimit:number yaptık ?. Çünkü;
    //? açıklamayı kaç karakter göstericez 20 mi ? , 40 mı?. bu parametreyi alalım ki
    //? value ile gelen string ifadeyi ona göre sınırlandıralım.

    transform(value: string, charLimit?: number) {
        //!   !value --> value bilgisi gelmediyse,null ise demek
        if(!value) return null;

        //! value değeri gönderiliyor fakat limit gönderilmezse, default bir limit 
        //! belirleyelim ve ona göre gelen value değerini kısaltıp gönderelim.
        charLimit = charLimit? charLimit:30;

        //! eğer value ile gelen açıklama charLimit değerinden küçükse direk kendisini döndürebiliriz
        if(charLimit > value.length){
            return value;
        }

        return value.substring(0,charLimit) + "...";
    }
}
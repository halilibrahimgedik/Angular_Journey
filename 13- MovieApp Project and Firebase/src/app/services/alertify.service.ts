import { Injectable } from "@angular/core";

declare let alertify:any;

// ! Global bir service oluşturmak istiyorsak servisi tanımladıktan 
// ! sonra ilgili component'de 'inject' etmeliyiz.

@Injectable()
export class AlertifyService{

    constructor() {}

    success(message: string){
        alertify.success(message);
    }

    error(message: string){
        alertify.error(message);
    }

    warning(message: string){
        alertify.warning(message);
    }
}

//TODO Appmodule'de providers[] dizisinin içine eklenmeli. Çünkü servisler oraya tanımlanır.
//TODO bunu yaparsan @Injectable() içine aşağıdaki kodu yazmaya gerek kalmaz
// {
//     providedIn:'root' //?  root = c#'da singleton. root,any,platform olmak üzere 3 çeşitdir.
// }
import { AbstractControl, ValidationErrors } from '@angular/forms';
import {of} from "rxjs";

export function mustContainQuestionMark(control: AbstractControl): ValidationErrors | null {
  if (control.value && control.value.includes('?')) {
    return null; // Geçerli
  }
  return { doesNotContainQuestionMark: true }; // Hata durumu
}

export function isMailAddressUnique(control: AbstractControl) {
  // burada, hard code yerine bir backend'e istek attığımızı varsayalım
  if(control.value === "test@gmail.com"){
    return of({notUnique: true});
  }

  return of(null);
}

export function checksPasswords(control: AbstractControl) {
  const password = control.get("password")?.value;
  const confirmPassword = control.get("confirmPassword")?.value;

  if(password === confirmPassword){
    return null;
  }

  return { passwordsNotEqual: true};
}

import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {isMailAddressUnique, mustContainQuestionMark} from "../../validators/custom-validators";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [isMailAddressUnique]
    }),
    password: new FormControl('', {
      validators: [Validators.required, mustContainQuestionMark]
    }),
  });

  // form alanını kaydetme (sayfa yanlışlıkla yenilendiğinde önceki girilen bilgileri localstorage'dan çekebiliriz)
  ngOnInit() {

    const savedForm = window.localStorage.getItem("saved-login-form-values");

    if(savedForm) {
      const loadedForm = JSON.parse(savedForm);
      this.loginForm.setValue(loadedForm);
    }

    const subscription = this.loginForm.valueChanges.pipe(debounceTime(500))
      // debounceTime => kullanıcı yazmayı vıraktıkdan 0.5 saniye sonra kaydeder.
      // pipe ile bunu eklemezsek, normalde her klavyeden girilen girdi için localStorage'a kaydeder
      .subscribe({
        next: value => {
          window.localStorage.setItem("saved-login-form-values", JSON.stringify(value));
        }
      })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  get emailIsInvalid(){
    return (this.loginForm.controls.email.touched || this.loginForm.controls.email.dirty) &&
      this.loginForm.controls.email.invalid
  }

  get passwordIsInvalid(){
    return (this.loginForm.controls.password.touched || this.loginForm.controls.password.dirty) &&
      this.loginForm.controls.password.invalid;
  }

  onSubmit(){
    console.log(this.loginForm);
    console.log(this.loginForm.value.email);
  }
}

import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {checksPasswords, mustContainQuestionMark} from "../../validators/custom-validators";

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [
    ReactiveFormsModule
  ]
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email]
    }),
    passwords: new FormGroup({
      password: new FormControl('',{
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl('',{
        validators: [Validators.required, Validators.minLength(6)]
      })
    },
    {
      validators: [checksPasswords] // passwords FormGroup'unun Validator'ı
    }),
  });

  onSubmit(){
    console.log(this.signupForm);
  }

  onReset(){
    this.signupForm.reset();
  }
}

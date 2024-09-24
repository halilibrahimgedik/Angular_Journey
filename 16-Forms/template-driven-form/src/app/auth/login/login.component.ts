import {afterNextRender, Component, DestroyRef, inject, viewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>("formData");
  private destroyRef = inject(DestroyRef)

  constructor() {
    afterNextRender(() => { // form set edildikten sonra çalışacak (lifecycle konusu)
      const savedForm = window.localStorage.getItem('saved-login-form');
      if(savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout(() => {
          this.form().controls["email"].setValue(savedEmail);
        }, 10)
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => {
          window.localStorage.setItem("saved-login-form", JSON.stringify({email: value.email}));
        }
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    })
  }


  onSubmit(formData: NgForm) {
    if(formData.form.invalid){
      return;
    }
    console.log(formData.form);
    console.log(formData.form.controls['email'].value);
    console.log(formData.form.value.email);
  }
}

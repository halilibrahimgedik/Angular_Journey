import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {

  registerForm : FormGroup
  constructor(private formBuilder : FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName : [null,[Validators.required,Validators.minLength(2)]],
      lastName : [null,[Validators.required,Validators.minLength(2)]],
      email : [null,[Validators.required,Validators.email]],
      password : [null,[Validators.required,Validators.minLength(8)]],
      repassword : [null,[Validators.required,Validators.minLength(8)]],
      address : [null,[Validators.required]],
    },{
      validators:this.passwordsMatch("password","repassword")
    })
  }

  ngOnInit(): void {}

  passwordsMatch(password:string, repassword:string){
    return (controls : AbstractControl)=>{
      if(controls){
        const password = controls.get("password")?.value;
        const repassword = controls.get("repassword")?.value;

        if(password !== repassword){
          controls.get("repassword")?.setErrors({ not_the_same : true });
          return { mismatchedPassword: true }
        }
      }
      return null
    }
  }

  // registerForm = new FormGroup({
  //   firstName: new FormControl(null,[Validators.required,Validators.minLength(2)]),
  //   lastName: new FormControl(null,[Validators.required,Validators.minLength(2)]),
  //   email: new FormControl(null,[Validators.required,Validators.email]),
  //   password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //   repassword : new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //   address : new FormControl(null,[Validators.required])
  // })

}

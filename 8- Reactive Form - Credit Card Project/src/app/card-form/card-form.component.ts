import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  form: FormGroup; // formumuzu temsil edecek nesne referansı

  // constructor(private formBuilder : FormBuilder) {
  //   this.form = formBuilder.group({
  //     fullname:["", [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
  //     cardNumber:["", [Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
  //     expireDate:["", [Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY formatına uygun regex)],
  //     cvc:["", [Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
  //   });
  // }
    constructor() {
    this.form = new FormGroup({
      fullname: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
      cardNumber: new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
      expireDate: new DateFormControl("",[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
      cvc : new DateFormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }

  get fullname() {
    return this.form.get('fullname');
  }
  get cardNumber() {
    return this.form.get('cardNumber');
  }
  get expireDate() {
    return this.form.get('expireDate');
  }
  get cvc() {
    return this.form.get('cvc');
  }

  resetForm(){
    this.form.reset();
  }
}

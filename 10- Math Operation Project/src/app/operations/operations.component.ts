import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, DecimalPipe } from '@angular/common';
import {OperationValidator} from '../Validators/operation-validator'
import { delay, filter, scan } from 'rxjs';


@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,DecimalPipe],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css'
})
export class OperationsComponent implements OnInit {

  averageTime = 0;
  ngOnInit(): void 
  {
    // const startTime = new Date();
    // let correctAnswer = 0;

    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(300),
      scan(
        acc => 
        {
          return {
            correctAnswer: acc.correctAnswer+1,
            startTime: acc.startTime
          };
        },{correctAnswer: 0 , startTime : new Date()}))
      .subscribe(({correctAnswer , startTime})=>{

        // correctAnswer++;
        this.averageTime = (new Date().getTime()-startTime.getTime())/correctAnswer/1000; //saniyeye çevirdik

        this.mathForm.setValue({
          firstNumber:this.generateNumber(),
          secondNumber:this.generateNumber(),
          answer:""
        });
      
    })
  }


  mathForm = new FormGroup({
    firstNumber : new FormControl(this.generateNumber()),
    secondNumber : new FormControl(this.generateNumber()),
    answer : new FormControl(""),
    },
    [OperationValidator.addition('answer','firstNumber','secondNumber')]
  );

  generateNumber(){
    return Math.floor(Math.random()*10);
  }

   get firstNumber(){
    return this.mathForm.value.firstNumber;
  }

  get secondNumber(){
    return this.mathForm.value.secondNumber;
  }

  get answer(){
    return this.mathForm.value.answer;
  }

}

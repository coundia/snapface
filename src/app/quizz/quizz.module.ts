import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizzOneComponent} from "./components/quizz-one/quizz-one.component";



@NgModule({
  declarations: [
    QuizzOneComponent
  ],
  exports: [
    QuizzOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizzModule { }

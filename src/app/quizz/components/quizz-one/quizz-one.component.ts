import { Component, OnInit } from '@angular/core';
import { delay, mergeMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-quizz-one',
  templateUrl: './quizz-one.component.html',
  styleUrls: ['./quizz-one.component.scss']
})
export class QuizzOneComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
     const messages$=this.getMessage();
     messages$.pipe(
       mergeMap(message => this.processMessage$(message)),
       // exhaustMap(message => this.processMessage$(message)),
       // concatMap(message => this.processMessage$(message))
    ).subscribe();

    }

    //processMessage$
  processMessage$(message:string){
    const a=`message ${message}`
    return of(a ).pipe(
      tap(console.log),
      delay(3000)
    )
  }
  //getMessage
  getMessage(){
    return of('first'  ,  'second'  ,  'third').pipe(
      tap(console.log),
      delay(1000)
      )
  }
  //q7





}

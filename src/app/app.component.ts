import {Component, OnInit} from '@angular/core';
import {interval, Observable, of} from "rxjs";
import {concatMap, delay, exhaustMap, filter, map, mergeMap, switchMap, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
//creer un objet observable qui emet des string
  interval$!: Observable<string>;
  //operateurs haut niveau
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    //lambda  PIC / P = > ins
    //creer un observable dans le temps

    /*
        //les operateurs bas niveau
        this.interval$=interval(1000)
          .pipe(
            //filtre les emissions
            filter((value) => value % 3 === 0 ),
            //transformer les emissions
            map(
              (value) =>  value%2 === 0 ? `Je suis value ${value} et  je suis  pair` : `Je suis ${value} et je suis impair`
            ),
            //ajout des effets secondaires à l observable
            tap(text =>this.logger(text))

          );

      };//fin OnInit
      //afficher un log
        logger(text: string) {
        console.log(` log : ${text} `)

     */
    //demie seconde
    /*
    interval(500).pipe(
      //nombre d objet à creer
      take(10),
      //transformer des obs
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      //pour traitement ulterieur 1 //Obs inter : e1
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      //n'attend pas qu'un Observable intérieur complète pour souscrire au suivant – il assure la mise en parallèle.
      //mise en parallele
       //mergeMap(color => this.getTrainObservable$(color)),
      //attend que l'Observable intérieur complète avant de souscrire au suivant –
      // il assure la mise en série, même lorsque l'Observable extérieur émet plusieurs fois.
      //e1 suivi de e2
      concatMap(color => this.getTrainObservable$(color)),
      //ignore toute nouvelle émission de l'Observable extérieur tant qu'il y a une souscription active à un Observable intérieur.
      //traiter tous e1 puis e2
       //exhaustMap(color => this.getTrainObservable$(color)),
      //reçoit une nouvelle émission de l'Observable extérieur, s'il y a une souscription active à un Observable intérieur, il l'annule et souscrit au suivant.
      //traitement successive
      // switchMap(color => this.getTrainObservable$(color)),
      //pour traitement ulterieur //Obs inter  : e2
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

//obs externe
  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({color, trainIndex}).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }


  */
}
}


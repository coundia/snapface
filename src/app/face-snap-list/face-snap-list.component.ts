import {Component, OnDestroy, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {interval, Observable, Subject} from "rxjs";
import {take, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit ,OnDestroy {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  //Un Subject est un Observable que l'on peut forcer à émettre avec sa méthode next()  .
    private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps() ;
    this.destroy$ =new Subject<boolean>();
    //creer des obs
    interval(1000).pipe(
      //limiter le nombre de obs à creer si on connait le nombre
      // take(1),
      takeUntil(this.destroy$),//si destroy est appelé
      //afficher
      tap(console.log)
    ).subscribe();
  }

  //ngOnDestroy est un lifecycle hook qui est appelé lors de la destruction du component.

  ngOnDestroy(): void {
    console.log("Ondestroy");
    this.destroy$.next(true);
  }



}

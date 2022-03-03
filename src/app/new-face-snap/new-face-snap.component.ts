import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs";
import {FaceSnap} from "../core/models/face-snap.model";
import {map, tap} from "rxjs/operators";
import {FaceSnapsService} from "../core/services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  //creation de formulaire
  snapForm!: FormGroup;
  faceSnapPreview$! : Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder : FormBuilder,
              private snapService : FaceSnapsService,
              private router: Router
              ) {

}

  ngOnInit(): void {
    //init
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    //creation dynamique des champs
    this.snapForm = this.formBuilder.group(
      {
        title : [null,Validators.required],
        description : [null,Validators.required],
        imageUrl : [null,[Validators.required,Validators.pattern(this.urlRegex)]],
        location : [null]
      },
      //gerer les events
      {
        "updateOn":"blur"
      }
    );
    //suivre les changements
    this.faceSnapPreview$=this.snapForm.valueChanges.pipe(
      map(formValue =>({
        //operateur spread recup tous les champs
        ...formValue,
        createdDate : new Date(),
        id:0,
        snap:0,
      })
      )
    );
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
    this.snapService.addFaceSnap(this.snapForm.value).pipe(
      tap(
        ()=> {
          this.router.navigateByUrl("/facesnaps");
        }
      )
    ).subscribe();

  }

}

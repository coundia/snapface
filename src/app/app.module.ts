import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuizzOneComponent } from './quizz-one/quizz-one.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {FaceSnapsModule} from "./face-snaps/face-snaps.module";

@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,
    QuizzOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    CoreModule,
    FaceSnapsModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}

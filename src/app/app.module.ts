import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
 import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {AuthModule} from "./auth/auth.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    LandingPageModule,
    AuthModule,
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

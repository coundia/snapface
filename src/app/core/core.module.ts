import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpInterceptorProvider} from "./interceptors";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    //*ngIf ngClass directives de base
    CommonModule,
    RouterModule
  ],
  providers : [
    { provide: LOCALE_ID, useValue: 'fr-FR' },HttpInterceptorProvider
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import {QuizzOneComponent} from "./quizz/components/quizz-one/quizz-one.component";

const routes: Routes = [
  { path: 'quizz/1', component: QuizzOneComponent },
  //implementer le lazy loading
  {
    path: 'facesnaps', loadChildren : () =>import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)
  },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

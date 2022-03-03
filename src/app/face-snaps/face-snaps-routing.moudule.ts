import {RouterModule, Routes} from "@angular/router";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: SingleFaceSnapComponent },
  { path: '', component: FaceSnapListComponent }
];

@NgModule(
  {
    imports: [
      //enregistrer les routes on ne peut pas utiliser forRoot que dans AppModule
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ],
  }
)
export class FaceSnapsRoutingModule{

}

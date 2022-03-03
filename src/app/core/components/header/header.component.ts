import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  //token!: string;

  constructor(private router : Router,private auth: AuthService) {

  }

  ngOnInit(): void {

  }

  onAddNewFaceSnap():void{
    this.router.navigateByUrl("/facesnaps/create")
  }



  onLogoutBtn() {
    this.auth.onLogout();
  }

  onLoginBtn() {
    this.auth.onLogin();
  }
   isConnected() {
    return !!this.auth.getToken();
  }
}
